import { createContext, useState } from "react";

// eslint-disable-next-line no-unused-vars
const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (movie) => {},
    removeFavorite: (movieId) => {},
    itemIsFavorite: (movieId) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(movie){
        setUserFavorites((prevFavorites) => {
            return prevFavorites.concat(movie);
        });
    }

    function removeFavoriteHandler(movieId){
        setUserFavorites(prevFavorites => {
            return prevFavorites.filter(movie => movie.id !== movieId)
        });
    }

    function itemIsFavorite(movieId){
        return userFavorites.some(movie => movie.id === movieId)
    }

    // eslint-disable-next-line no-unused-vars
    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavorite
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>    
}

export default FavoritesContext;