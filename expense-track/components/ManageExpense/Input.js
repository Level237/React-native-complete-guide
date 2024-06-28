import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/style'

export default function Input({label,style,textInputConfig}) {

    const inputStyles=[styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }
  return (
    <View style={[styles.InputContainer,style]}>
       <Text style={styles.label}>{label}</Text>
      <TextInput  style={inputStyles} {...textInputConfig}/>
    </View>
  )
}

const styles=StyleSheet.create({
    InputContainer:{
        marginHorizontal:4,
        marginVertical:8,
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:GlobalStyles.colors.primary700,
        textAlignVertical:'top',
        
    },
    inputMultiline:{
        minHeight:100,
    }
})