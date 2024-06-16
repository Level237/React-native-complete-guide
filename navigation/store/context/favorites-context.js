import { createContext, useState } from "react";


export const FavoritesContext=createContext({
    ids:[],
    addFavorites:(id)=>{},
    removeFavorite:(id)=>{}
});

function FavoritesContextProvider({children}){

    const [favoriteMealId,setFavoriteMealId]=useState([])

    function addFavorites(id){
        setFavoriteMealId((currentFavId)=>[...currentFavId,id])
    }

    function removeFavorite(id){
        setFavoriteMealId((currentFavId)=>currentFavId.filter(mealId=>mealId!==id))
    }
    const values={
        ids:favoriteMealId,
        addFavorites,
        removeFavorite
    }
    return <FavoritesContext.Provider value={values}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;
