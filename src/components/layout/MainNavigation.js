import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/FavoriteContext";
import classes from './MainNavigation.module.css'

function MainNavigation()
{
    const favoritesCtx = useContext(FavoritesContext)
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Movies</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Movies</Link>
                    </li>
                    <li>
                        <Link to="/addMovie">Add Movie</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites
                        <span className= {classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;