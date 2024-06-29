import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button'

export default function ExpenseForm({onCancel,onsubmit,submitLabel}) {
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

    function submitHandler(){
      const expenseData={
        amount:+inputValues.amount,
        date:new Date(inputValues.date),
        description:inputValues.description
      };

      onsubmit(expenseData)
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
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
        <Button style={styles.button}  onPress={submitHandler}>{submitLabel}</Button>
      </View>
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
    },
    buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
})