import { createContext } from 'react';
import { useState } from 'react';

//this createContext has itself has a component. 
//The component should be named with capital letter.
const FavoritesContext = createContext({
    favorites: [], //initially there are no favorites
    totalFavorites: 0, //initially the total favorites are 0
    addFavorite: (favoriteJoin) => {},
    removeFavorite: (joinId) => {},
    itemsFavorite: (joinId) => {}
}); 

// In order to change/update the values of above object we need a component see below
export function FavoritesContextProvider(props) {
    //setUserFavorites is function is set the userFavorites
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteJoin) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteJoin);
        });
    }

    function removeFavoriteHandler(joinId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(join => join.id !== joinId);
        });
    }

    function itemIsFavoriteHandler(joinId) {
        return userFavorites.some(join => join.id === joinId);
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsFavorite: itemIsFavoriteHandler
    };

    //<favoritesContext.Provider> is the component built-in from FavoritesContext(line no 5) object 
    //This component needs to wrapped by all the components that are interested in interacting with that context.
    return <FavoritesContext.Provider value={context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;