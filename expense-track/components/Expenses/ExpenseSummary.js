import { View, Text } from 'react-native'


export default function ExpenseSummary({expense,periodName}) {

    const expensesSum=expense.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0);
  return (
    <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
  )
}