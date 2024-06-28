import { StyleSheet, View} from 'react-native'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/style'



export default function ExpenseOutput({expenses,expensesPeriod}) {
  return (
    <View style={styles.container}>
        <ExpenseSummary expense={expenses} periodName={expensesPeriod} />
        <ExpensesList expenses={expenses}/>
        
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        padding: 24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700,
    }
})