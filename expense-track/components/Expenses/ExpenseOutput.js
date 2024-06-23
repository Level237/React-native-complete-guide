import { View} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

export default function ExpenseOutput({expenses,expensesPeriod}) {
  return (
    <View>
        <ExpenseSummary periodName={expensesPeriod}/>
        <ExpensesList/>
        
    </View>
  )
}