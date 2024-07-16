import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

export default function PlaceList({places}) {

    if(!places || places.length ===0){
        return (
        <View style={styles.fallBackContainer}>
                    <Text style={styles.fallBackText}>No places added yet -- start adding some!</Text>
                </View>
        )
        
        
    }
  return (
    
     <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={({item})=>{
        <PlaceItem place={item}/>
     }}/>
    
  )
}

const styles=StyleSheet.create({
    fallBackContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    fallBackText:{
        fontSize:16
    }
})