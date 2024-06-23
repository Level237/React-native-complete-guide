import { View} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

export default function ExpenseOutput({expenses}) {
  return (
    <View>
        <ExpenseSummary/>
        <ExpensesList/>
        
    </View>
  )
}