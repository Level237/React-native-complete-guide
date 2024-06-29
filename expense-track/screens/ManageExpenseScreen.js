
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
  function confirmHandler(expenseData){
    if(isEditing){
      expenseCtx.updateExpense(editedExpenseId,expenseData)
    }else{
      expenseCtx.addExpense(expenseData)
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpensesForm submitLabel={isEditing ? "Update" : "Add"} onCancel={cancelHandler} onsubmit={confirmHandler}/>
     
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
    alignItems:'center'
  },
  
})
