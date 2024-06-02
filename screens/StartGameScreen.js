import {TextInput, View,StyleSheet,Alert} from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber,setEnteredNumber]=useState('')
    const resetNumber=()=>{
        setEnteredNumber('')
    }
    const numberInputHandler=(enteredText)=>{
        setEnteredNumber(enteredText)
    }
   
    function confirmHandler(){
        const chosenNumber=parseInt(enteredNumber);
        
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
           Alert.alert('Invalid number!','Number has to be a number between 1 and 99.',
           [{text:"Okay",style:'destructive',onPress:resetNumber()}]
           )
            return;
        }
        onPickNumber(chosenNumber);
    }
  return <View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} maxLength={2}
     keyboardType='number-pad' autoCorrect={false} autoCapitalize='none'
     onChangeText={numberInputHandler}
     value={enteredNumber}
     />
    <View style={styles.alignBtn}>
        <View style={styles.buttonContainer}>

    <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
    </View>
    </View>
    
  </View>
}

const styles=StyleSheet.create({
    inputContainer:{
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
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:"bold",
        textAlign:"center"
    },
    alignBtn:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex:1
    }
})