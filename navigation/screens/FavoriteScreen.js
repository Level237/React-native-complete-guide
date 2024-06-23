import { View, Text,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList/MealList'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'
export default function FavoriteScreen() {
  //const favoriteMealCtx=useContext(FavoritesContext)
    const favoriteMealIds=useSelector(state=>state.favoriteMeals.ids)
  const favoriteMeals=MEALS.filter(meal=>favoriteMealIds.includes(meal.id));

  if(favoriteMeals.length===0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>
        You Have no Favorite meals yet.
      </Text>
    </View>
  }
  return (
   <MealList items={favoriteMeals} />
  )
}

const styles=StyleSheet.create({
rootContainer:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
},
text:{
  fontSize:18,
  fontWeight:'bold',
  color:"white"
}
})