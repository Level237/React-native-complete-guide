import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subText}>{children}</Text>
      </View>
  )
}

const styles=StyleSheet.create({
    subText:{
        color:"#e2b497",
        fontSize:18,
        fontWeight:"bold",
        margin:6,
        textAlign:"center",
       
      },
      subtitleContainer:{
        borderBottomColor:"#e2b497",
        borderBottomWidth:2,
        marginHorizontal:12,
        marginVertical:4,
        padding:6,
      }
})