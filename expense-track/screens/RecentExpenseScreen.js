import { View, Text } from 'react-native'
import React from 'react'

export default function RecentExpenseScreen() {
  return (
    <View>
       <ExpenseOutput expensesPeriod="Last 7 days"/>
    </View>
  )
}