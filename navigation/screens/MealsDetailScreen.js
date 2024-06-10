import { View, Text, Image } from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealDetail from '../components/MealDetail';
export default function MealsDetailScreen({route,navigation}) {
    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
  return (
    <View>
      <Image source={{ uri:selectedMeal.imageUrl }}/>
      <Text>{selectedMeal.title}</Text>

      <MealDetail
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient)=> <Text key={ingredient}>{ingredient}</Text>)}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step)=> <Text key={step}>{step}</Text>)}
    </View>
  )
}