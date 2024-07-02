
import { StyleSheet, View,TextInput} from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expense-context';
import ExpensesForm from "../components/ManageExpense/ExpenseForm"
import { deleteExpense, storeExpense, updateExpense } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
function ManageExpenseScreen({route,navigation}) {
  const editedExpenseId=route.params?.expenseId;
  const isEditing=!!editedExpenseId;
  const [isLoading,setIsLoading]=useState(false)
  const expenseCtx=useContext(ExpensesContext)
  const selectedExpense=expenseCtx.expenses.find(expense=>{
    return expense.id===editedExpenseId
  })
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? 'Edit Expense' : "Add Expense"
    })
  },[navigation,isEditing]);
 
  async function deleteExpenseHandler(){
    await deleteExpense(editedExpenseId)
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
    console.log("delete")
  }
  function cancelHandler(){
    navigation.goBack();
  }
  async function confirmHandler(expenseData){
    setIsLoading(true)
    if(isEditing){
      expenseCtx.updateExpense(editedExpenseId,expenseData)
      await updateExpense(editedExpenseId,expenseData)
    }else{
      const id=await storeExpense(expenseData)
      expenseCtx.addExpense({...expenseData,id:id})
    }
    navigation.goBack();
  }
  if(isLoading){
    return <LoadingOverlay/>
  }
  return (
    <View style={styles.container}>
      <ExpensesForm submitLabel={isEditing ? "Update" : "Add"}
      defaultValues={selectedExpense}
      onCancel={cancelHandler} onsubmit={confirmHandler}/>
     
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
