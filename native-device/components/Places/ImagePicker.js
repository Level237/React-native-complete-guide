import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native'
import { launchCameraAsync,useCameraPermissions,PermissionStatus } from 'expo-image-picker'
import { useState } from 'react';
import { Colors } from '../../constants/colors';

export default function ImagePicker() {
  const [picketImage,setPicketImage]=useState()
  const [cameraPermissionInformation,requestPermission]=useCameraPermissions()

  async function verifyPermissions(){
    if(cameraPermissionInformation.status===PermissionStatus.UNDETERMINED){
     const permissionResponse= await requestPermission();

     return permissionResponse.granted;
    }

    if(cameraPermissionInformation.status===PermissionStatus.DENIED){
      Alert.alert("Unsufficient Permissions!","You need to grant camera permissions to use this app.")

      return false;
    }

    return true;
  }
  async function takeImageHandler(){
   const hasPermission= await verifyPermissions()

   if(!hasPermission){
    return;
   }
    const image=await launchCameraAsync({
      allowsEditing:true,
      aspect:[16,9],
      quality:0.5,
    })
    setPicketImage(image.assets[0].uri)
    //console.log(image.assets[0].uri)
  }
  let imagePreview=<Text>No image taken</Text>

  if(picketImage){
    imagePreview=<Image style={styles.image} source={{ uri:picketImage }} />
  }
  return (
    <View>
      <View style={styles.imagePreview}>
      {imagePreview}
      </View>
      <Button title="take image" onPress={takeImageHandler}/>
    </View>
  )
}

const styles=StyleSheet.create({
  imagePreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:Colors.primary100,
    borderRadius:4,
    color:Colors.gray700
  },
  image:{
    width:"100%",
    height:"100%"
  }
})