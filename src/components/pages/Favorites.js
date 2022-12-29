import { useContext, useEffect, useState } from "react";
import MovieList from "../movies/MovieList";
import FavoritesContext from "../store/FavoriteContext";
function Favorites()
{
    const favoritesCtx = useContext(FavoritesContext)
    let content;
    let [count, setCount] = useState(300)
    function Timer(){
        useEffect(()=>{
            setTimeout (()=>{
                setCount(count = count-1);
            }, 1000);
        });
    }
    if(favoritesCtx.totalFavorites === 0){
        content=<h3>Nothing here yet, start adding some favorites</h3>
    }else{
        content=<MovieList movies={favoritesCtx.favorites}/>
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Favorites Page</h2>
            <Timer/>
            <h2>Counter: {count}</h2>
            {content}
        </div>
    )
}
export default Favorites;