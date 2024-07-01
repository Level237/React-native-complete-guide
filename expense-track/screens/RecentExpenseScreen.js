import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ExpenseOutput from '../components/Expenses/ExpenseOutput'
import { DUMMY_EXPENSES, ExpensesContext } from '../store/expense-context'
import { getDateMinusDays } from '../utils/date'
import { getExpense } from '../utils/http'

export default function RecentExpenseScreen() {
  
  useEffect(()=>{

    async function fetchExpenses(){
      const expenses=await  getExpense();
    }
    fetchExpenses()
  })
  const expensesCtx=useContext(ExpensesContext)
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