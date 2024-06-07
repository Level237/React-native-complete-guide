import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View>
     <Pressable>
        <View>
            <Text>{title}</Text>
        </View>
     </Pressable>   
    </View>
  )
}