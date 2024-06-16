import { createContext } from "react";


export const FavoritesContext=createContext({
    ids:[],
    addFavorites:(id)=>{},
    removeFavorite:(id)=>{}
});

function FavoritesContextProvider({children}){


    return <FavoritesContext.Provider>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;
