import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';

export default function PlaceForm() {

  const [enteredTitle,setEnteredTitle] =useState("");

  function changedTitleHandler(enteredTitle){
    setEnteredTitle(enteredTitle)
  }
  return (
    <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} onChangeText={changedTitleHandler} value={enteredTitle}/>
        </View>
        <ImagePicker />
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  form: { 
    height:"100%",
    padding:24
  },

  label:{
    fontWeight:"bold",
    marginBottom:4,
    color:Colors.primary500
  },
  input:{
    marginVertical:8,
    paddingHorizontal:4,
    paddingVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    borderBottomWidth:2,
    backgroundColor:Colors.primary100
  }
})