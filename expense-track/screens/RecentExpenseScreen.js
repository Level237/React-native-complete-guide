import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpenseOutput from '../components/Expenses/ExpenseOutput'
import { DUMMY_EXPENSES, ExpensesContext } from '../store/expense-context'
import { getDateMinusDays } from '../utils/date'
import { getExpense } from '../utils/http'
import LoadingOverlay from '../components/UI/LoadingOverlay'

export default function RecentExpenseScreen() {
  const [isFetching,setIsFecthing]=useState(true)
  const expensesCtx=useContext(ExpensesContext)
  useEffect(()=>{

    async function fetchExpenses(){
      setIsFecthing(true)
      const expenses=await  getExpense();
      setIsFecthing(false)
      expensesCtx.setExpenses(expenses)
    }
    fetchExpenses()
  },[])

  if(isFetching){
    return <LoadingOverlay/>
  }
  //const expensesCtx=useContext(ExpensesContext)
  const recentExpenses=expensesCtx.expenses.filter((expense)=>{
    const today=new Date();
    const date7DaysAgo=getDateMinusDays(today,7);
    return expense.date > date7DaysAgo
  })
  

  
  return (
    <View>
       <ExpenseOutput  expenses={recentExpenses} fallbackText={"No Expenses Registered the last 7 days"} expensesPeriod="Last 7 days"/>
    </View>
  )
}