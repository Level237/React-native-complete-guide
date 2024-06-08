import { View, Text } from 'react-native'
import React from 'react'

export default function MealsDetailScreen({route,navigation}) {
    const mealId=route.params.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  )
}