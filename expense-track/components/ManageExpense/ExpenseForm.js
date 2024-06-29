import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
      amount:'',
      date:'',
      description:''
    })
    function inputChangeHandler(InputIdentifier,enteredValue){
      setInputValues((curInputValues)=>{
        return {
          ...curInputValues,
          [InputIdentifier]:enteredValue
        }
      })
    }
  return (
    <View style={styles.form}>

        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
        <Input label="Amount"
        style={styles.rowInput}
        textInputConfig={{ 
        keyboardType:"decimal-pad",
        onChangeText:inputChangeHandler.bind(this,'amount'),
        value:inputValues.amount
      }}/>
     <Input label="Date" 
     style={styles.rowInput}
     textInputConfig={{ 
        placeholder:'YYYY-MM-DD',
        maxLength:10,
        onChangeText:inputChangeHandler.bind(this,'date'),
        value:inputValues.date
      }}
     />
    

        </View>
        <Input label="Description"
     textInputConfig={{ 
        multiline:true,
        numberOfLines:4,
        //autoCapitalize:'none',
        //autoCorrect:false
        onChangeText:inputChangeHandler.bind(this,'description'),
        value:inputValues.description
      }}
      
     />
    </View>
  )
}

const styles=StyleSheet.create({
    form:{
        marginTop:30
    },
    inputsRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowInput:{
        flex:1
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center'
    }
})