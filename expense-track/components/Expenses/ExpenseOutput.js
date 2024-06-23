import { View} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'


const DUMMY_EXPENSES = [
    {
        id:"e1",
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2021-12-19'),
    },
    {
        id:"e2",
        description:'A pair of trousers',
        amount:89.29,
        date:new Date('2022-01-05'),
    },
    {
        id:"e3",
        description:'Some bananas',
        amount:5.99,
        date:new Date('2021-12-01'),
    },
    {
        id:"e4",
        description:'A book',
        amount:14.99,
        date:new Date('2022-02-19'),
    },
    {
        id:"e5",
        description:'Another book',
        amount:18.99,
        date:new Date('2022-02-18'),
    }
]
export default function ExpenseOutput({expenses,expensesPeriod}) {
  return (
    <View>
        <ExpenseSummary periodName={expensesPeriod} expense={DUMMY_EXPENSES}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
        
    </View>
  )
}