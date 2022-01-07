import { useContext } from 'react';
import { Link } from 'react-router-dom';

//you can name anything instead of classes.Here classes act as a props in javascript.
import classes from './MainNavigation.module.css'; 
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Joins</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Join</Link>
                    </li>
                    <li>
                        <Link to='/new-join'>New Join</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;