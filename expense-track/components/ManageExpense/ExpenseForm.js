import { Alert, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button'
import { getFormatedDate } from '../../utils/date'

export default function ExpenseForm({onCancel,onsubmit,submitLabel,defaultValues}) {
    const [inputs, setInputs] = useState({
      amount:{value:defaultValues ? defaultValues.amount.toString() : '',
      isValid:true
    },
      date:{value:defaultValues ? getFormatedDate(defaultValues.date) : '',
    isValid:true
    },
      description:{value:defaultValues ? defaultValues.description : '',
    
    isValid:true}
    })
    function inputChangeHandler(InputIdentifier,enteredValue){
      setInputs((curInputs)=>{
        return {
          ...curInputs,
          [InputIdentifier]:{value:enteredValue,isValid:true}
        }
      })
    }

    function submitHandler(){
      const expenseData={
        amount:+inputs.amount.value,
        date:new Date(inputs.date.value),
        description:inputs.description.value
      };

      const amountIsValid=expenseData.amount > 0 && !isNaN(expenseData.amount)
      const dateIsValid=new Date(expenseData.date).toString() !== 'Invalid Date'
      const descriptionIsValid=expenseData.description.trim().length > 0
      if(!amountIsValid || !dateIsValid || !descriptionIsValid){
        //Alert.alert('Invalid Input','Please check your input values')
        setInputs((curInputs)=>{
          return {
            amount:{value:curInputs.amount.value,isValid:amountIsValid},
            date:{value:curInputs.date.value,isValid:dateIsValid},
            description:{value:curInputs.description.value,isValid:descriptionIsValid},
          }
        })
        return
      }
      onsubmit(expenseData)
    }

    const formIsValid=!inputs.amount.isValid || !inputs.date.isValid || !inputs.description
  return (
    <View style={styles.form}>

        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
        <Input label="Amount"
        style={styles.rowInput}
        textInputConfig={{ 
        keyboardType:"decimal-pad",
        onChangeText:inputChangeHandler.bind(this,'amount'),
        value:inputs.amount.value
      }}/>
     <Input label="Date" 
     style={styles.rowInput}
     textInputConfig={{ 
        placeholder:'YYYY-MM-DD',
        maxLength:10,
        onChangeText:inputChangeHandler.bind(this,'date'),
        value:inputs.date.value
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
        value:inputs.description.value
      }}
      
     />
     {formIsValid && <Text>Invalid input values-please check your entered data</Text>}
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