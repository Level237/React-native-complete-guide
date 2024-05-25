import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoalInput,setEnteredGoalInput]=useState('')
  function goalInputHandler(enteredText){
    setEnteredGoalInput(enteredText)
  }

  function addGoalHandler(){}
  return (
    <View style={styles.appContainer}>
       <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={goalInputHandler }/>
      <Button onPress={addGoalHandler} title='Add Goal'/>
    </View>
    <View style={styles.goalsContainer}>
      <Text>List Of Goal..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
   paddingTop:50,
   paddingHorizontal:16,
  },
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
  goalsContainer:{
    flex:5
  }
});
