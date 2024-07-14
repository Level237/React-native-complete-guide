import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PlaceList({places}) {
  return (
    <View>
     <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={d}/>
    </View>
  )
}