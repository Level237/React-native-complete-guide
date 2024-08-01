import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OutlineButton from '../UI/OutlineButton'
import { Colors } from '../../constants/colors'

export default function LocationPicker() {

  function getLocationHandler(){

  }

  function pickOnMapHandler(){

  }
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton onPress={getLocationHandler} icon="location">Locate User </OutlineButton>
        <OutlineButton onPress={pickOnMapHandler} icon="map">Pick on Map </OutlineButton>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  mapPreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:Colors.primary100,
    borderRadius:4,
  },
  actions:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center'
  }
})

