import { View,Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/style'
import Button from './Button'

export default function ErrorOverlay({message}) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text,styles.title]}>An error occurred!</Text>
        <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        textAlign:"center",
        marginBottom:8,
        color:'white'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        
    },
})