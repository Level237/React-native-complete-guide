import { View, Text, Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
export default function MealsDetailScreen({route,navigation}) {
    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
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