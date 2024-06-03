import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        marginHorizontal:24,
         marginTop:100,
         backgroundColor:Colors.primary800,
         borderRadius:9,
         padding:16,
         elevation:4,
         shadowColor:"black",
         shadowOffset:{width:0,height:2},
         shadowRadius:6,
         shadowOpacity:1,
         alignItems:"center",
         justifyContent:"center"
     },
})