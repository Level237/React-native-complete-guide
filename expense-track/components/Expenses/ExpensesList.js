import { View, Text, FlatList } from 'react-native'
import React from 'react'

function renderExpensesItem(itemData){
  return <Text>{itemData.item.description}</Text>
}
export default function ExpensesList({expenses}) {
  return (
    <FlatList data={expenses} renderItem={renderExpensesItem}
    
    keyExtrator={(item)=>item.id}/>
  )
}