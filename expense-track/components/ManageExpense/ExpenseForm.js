import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Input from './Input'

export default function ExpenseForm() {

    function amountChangeHandler(){

    }
  return (
    <View style={styles.form}>

        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
        <Input label="Amount"
        style={styles.rowInput}
        textInputConfig={{ 
        keyboardType:"decimal-pad",
        onChangeText:amountChangeHandler,
      }}/>
     <Input label="Date" 
     style={styles.rowInput}
     textInputConfig={{ 
        placeholder:'YYYY-MM-DD',
        maxLength:10,
        onChangeText:()=>{

        }
      }}
     />
    

        </View>
        <Input label="Description"
     textInputConfig={{ 
        multiline:true,
        numberOfLines:4
        //autoCapitalize:'none',
        //autoCorrect:false
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