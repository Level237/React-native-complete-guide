import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice=createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state,action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavorites:(state)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const addFavorite=favoritesSlice.actions.addFavorite
export const removeFavorites=favoritesSlice.actions.removeFavorites
export default favoritesSlice.reducer