import { View, Text } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/Expenses/ExpenseOutput'

export default function AllExpensesScreen() {
  return (
    <View>
      <ExpenseOutput expensesPeriod="Total"/>
    </View>
  )
}