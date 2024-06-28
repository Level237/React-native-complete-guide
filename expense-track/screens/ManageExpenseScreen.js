
import { StyleSheet, View,TextInput} from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expense-context';
import ExpensesForm from "../components/ManageExpense/ExpenseForm"
function ManageExpenseScreen({route,navigation}) {
  const editedExpenseId=route.params?.expenseId;
  const isEditing=!!editedExpenseId;
  const expenseCtx=useContext(ExpensesContext)
 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? 'Edit Expense' : "Add Expense"
    })
  },[navigation,isEditing]);
 
  function deleteExpenseHandler(){
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
    console.log("delete")
  }
  function cancelHandler(){
    navigation.goBack();
  }
  function confirmHandler(){
    if(isEditing){
      expenseCtx.updateExpense(editedExpenseId,{description:"Test1234",amount:10.8,date:new Date('2024-06-28')})
    }else{
      expenseCtx.addExpense({description:"Test",amount:20.8,date:new Date('2024-06-28')})
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpensesForm/>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button}  onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      <View style={styles.deleteContainer}>
      {isEditing && <IconButton icon={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>}
      </View>
     
    </View>
  )
}

export default ManageExpenseScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
})
