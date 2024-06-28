import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/Expenses/ExpenseOutput'
import { DUMMY_EXPENSES, ExpensesContext } from '../store/expense-context'
import { getDateMinusDays } from '../utils/date'

export default function RecentExpenseScreen() {
  
  const expensesCtx=useContext(ExpensesContext)
  const recentExpenses=expensesCtx.expenses.filter((expense)=>{
    const today=new Date();
    const date7DaysAgo=getDateMinusDays(today,7);
    return expense.date > date7DaysAgo
  })
  

  
  return (
    <View>
       <ExpenseOutput  expenses={recentExpenses} expensesPeriod="Last 7 days"/>
    </View>
  )
}