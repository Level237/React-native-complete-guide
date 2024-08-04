import { View, Alert, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import OutlineButton from '../UI/OutlineButton'
import { Colors } from '../../constants/colors'
import { getCurrentPositionAsync,useForegroundPermissions,PermissionStatus } from 'expo-location'
import { getMapPreview } from '../../utils/location'
export default function LocationPicker() {
  const [locationPermissionInformation,requestPermission]=useForegroundPermissions()
  const [pickedLocation,setPickedLocation]=useState()
  async function verifyPermissions(){
    if(locationPermissionInformation.status===PermissionStatus.UNDETERMINED){
      const permissionResponse= await requestPermission();
 
      return permissionResponse.granted;
     }
     if(locationPermissionInformation.status===PermissionStatus.DENIED){
      Alert.alert("Insufficient Permissions!",
      'You need to grant location permissions to use this app.'
      )
      return false;
     }
     return true;
  }
  async function getLocationHandler(){
  const hasPermission=await verifyPermissions();

  if(!hasPermission){
  return;
  }

   const location=await getCurrentPositionAsync()
   setPickedLocation({
    lat:location.coords.altitude,
    lon:location.coords.longitude
  })
  }

  function pickOnMapHandler(){
   
  }

  let locationPreview=<Text>No location picked yet.</Text>

  if(pickedLocation){
    locationPreview=(<Image style={styles.image} source={{ uri:getMapPreview(pickedLocation.lat,pickedLocation.lon) }}/>)
  }
  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
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
  },
  image:{
    width:"100%",
    height:"100%"
  }
})

