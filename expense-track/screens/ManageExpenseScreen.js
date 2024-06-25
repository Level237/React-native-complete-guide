import { StyleSheet, View} from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import Button from '../components/UI/Button';

function ManageExpenseScreen({route,navigation}) {
  const editedExpenseId=route.params?.expenseId;
  const isEditing=!!editedExpenseId;

  function deleteExpenseHandler(){

  }
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? 'Edit Expense' : "Add Expense"
    })
  },[navigation,isEditing]);
 
  function cancelHandler(){

  }
  function confirmHandler(){

  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button}  onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      <View style={styles.deleteContainer}>
      {isEditing && <IconButton icon={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>}
      </View>
     
    </View>
  )
}

export default ManageExpenseScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
})