import { useState } from "react";
import { Button, StyleSheet, TextInput, View,Modal,Image  } from "react-native";


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
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      <TextInput style={styles.textInput} value={enteredGoalInput} placeholder='Your course Goal' onChangeText={goalInputHandler }/>
      <View style={styles.buttonContainer}>
      <Button  title='Cancel' onPress={props.endModal} color="#f31282"/>
         <Button onPress={addGoalHandler} title='Add Goal' color="#b180f0"/>
         
      
      </View>
      
    </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        gap:16,
        backgroundColor:"#311b6b"
      },
      textInput:{
        borderWidth:1,
        borderColor:"#e4d0ff",
        backgroundColor:"#e4d0ff",
        color:"#120438",
        borderRadius:6,
        width:'70%',
        marginRight:8,
        padding:6
      },
      buttonContainer:{
        flexDirection:'row',
        gap:16,
        marginTop:16
      },
      button:{
        width:'40%',
        marginHorizontal:8,
        
      },
      image:{
        width:100,
        height:100,
        margin:20,
      }
})
