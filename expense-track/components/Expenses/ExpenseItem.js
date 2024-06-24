import { View, Text, Pressable, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'
import { getFormatedDate } from '../../utils/date'

export default function ExpenseItem({description,amount,date}) {

    function expensePressHandler(){

    }
  return (
    <Pressable onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed}
    android_ripple
    >

        <View style={styles.expenseItem}>

        <View>
      <Text style={[styles.textBase,styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
       
      </View>
      <View style={styles.amountContainer}>
      <Text style={styles.amount}>{amount.toFixed(2)}</Text>
      </View>
     
      </View>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    expenseItem:{
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12,
        marginVertical:8,
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
})