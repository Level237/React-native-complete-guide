import {TextInput, View,StyleSheet,Alert} from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

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
  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a number</InstructionText>
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
        
      </Card>
    
      </View>
  )
 
  
}

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:"center"
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