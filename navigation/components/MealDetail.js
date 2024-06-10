import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function MealDetail({duration,complexity,affordability,style,TextStyle}) {
  return (
    <View style={[styles.details,style]}>
        <Text style={[styles.detailItem,TextStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem,TextStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem,TextStyle]}>{affordability}</Text>
       </View>
  )
}

const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})