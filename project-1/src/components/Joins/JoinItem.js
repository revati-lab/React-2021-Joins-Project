import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './JoinItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function JoinItem(props) {
    const favoriteCtx = useContext(FavoritesContext);

    const itemsFavorite = favoriteCtx.itemsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }


    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default JoinItem;