import { useContext } from 'react';
import classes from './MovieItem.module.css'
import FavoritesContext from '../store/FavoriteContext';
function MovieItem(props){
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    function toggleFavoritesStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                imdb: props.imdb,
                description: props.description
            })
        }
    }
    return(
        <ul className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <h3>{props.imdb}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </ul>
    )
}
export default MovieItem;