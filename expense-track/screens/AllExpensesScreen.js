import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/Expenses/ExpenseOutput'
import { ExpensesContext } from '../store/expense-context'

export default function AllExpensesScreen() {

  const expensesCtx=useContext(ExpensesContext)
  return (
    <View>
      <ExpenseOutput expenses={expensesCtx.expenses} expensesPeriod="Total"/>
    </View>
  )
}