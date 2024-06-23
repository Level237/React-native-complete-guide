import { View, Text, Image,StyleSheet,ScrollView, Button } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../store/redux/favorite';
//import { FavoritesContext } from '../store/context/favorites-context';
export default function MealsDetailScreen({route,navigation}) {
  //const favoriteMealCtx=useContext(FavoritesContext);
  const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids)
  const dispatch=useDispatch();
    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)

    const mealIsFavorite=favoriteMealIds.includes(mealId)


    function changeFavoriteStatusHandler(){
     if(mealIsFavorite){
      //favoriteMealCtx.removeFavorite(mealId)
      dispatch(removeFavorites({id:mealId}))
     }else{
      //favoriteMealCtx.addFavorites(mealId)
      dispatch(addFavorites({id:mealId}))
     }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight:()=>{
            return <IconButton icon={mealIsFavorite ? 'star' :'star-outline'} color="white" onPress={changeFavoriteStatusHandler}/>
          }
        })
    },[navigation,changeFavoriteStatusHandler])
  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri:selectedMeal.imageUrl }}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetail
      TextStyle={styles.detailStyle}
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      />
      <View style={styles.subtitleContainer}>
      </View>
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
        </View>
      </View>
     
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  root:{
    marginBottom:32
  },
  image:{
    width:"100%",
    height:350
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center",
    color:'white'
  },
  detailStyle:{
    color:'white'
  },
  listContainer:{
    maxWidth:"80%"
  },
  listOuterContainer:{
    alignItems:"center"
  }
})