import { View, Text, Pressable,StyleSheet,Platform } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
     <Pressable 
     android_ripple={{color:'#ccc'}} style={(pressed)=>pressed ? [styles.button,pressed ? styles.buttonPressed : null]:styles.button} 
     onPress={onPress}>
        <View style={[styles.innerContainer]}>
            <Text style={styles.title}>{title}</Text>
        </View>
     </Pressable>   
    </View>
  )
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS==='android' ? 'hidden' : 'visible'
    },
    buttonPressed:{
        opacity:0.5
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center'
    },
    title:{
        fontWeight:"bold",
        fontSize:18
    }
})