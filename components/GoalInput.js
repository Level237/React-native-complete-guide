import { useState } from "react";
import { Button, StyleSheet, TextInput, View,Modal } from "react-native";


export default function GoalInput(props) {
    const [enteredGoalInput,setEnteredGoalInput]=useState('')
    function goalInputHandler(enteredText){
        setEnteredGoalInput(enteredText)
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalInput);
        setEnteredGoalInput('')
      }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={enteredGoalInput} placeholder='Your course Goal' onChangeText={goalInputHandler }/>
      <Button onPress={addGoalHandler} title='Add Goal'/>
    </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
       
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        marginBottom:24,
        gap:16,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
      },
      textInput:{
        borderWidth:1,
        borderColor:"#cccccc",
        width:'70%',
        marginRight:8,
        padding:8
      },
      
})
