import { StyleSheet, Text, View} from 'react-native'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/style'



export default function ExpenseOutput({expenses,expensesPeriod,fallbackText}) {
  let content= <View style={styles.container}><Text style={styles.infoText}>{fallbackText}</Text></View>
  

  if(expenses.length >0){
    content= <View style={styles.container}>
    <ExpenseSummary expense={expenses} periodName={expensesPeriod} />
    <ExpensesList expenses={expenses}/>
    
</View>
  }
  return content;
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        padding: 24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700,
    },
    infoText:{
      color:'white',
      fontSize:16,
      textAlign:'center',
      marginTop:32

    }
})