import { useState } from 'react';
import { StyleSheet, View,Button, TextInput,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalInput,setEnteredGoalInput]=useState('')
  const  [courseGoals,setCourseGoals]=useState([])
  function goalInputHandler(enteredText){
    setEnteredGoalInput(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,{
      text:enteredGoalInput,id:Math.random().toString()
    }])
  }
  return (
    <View style={styles.appContainer}>
       <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={goalInputHandler }/>
      <Button onPress={addGoalHandler} title='Add Goal'/>
    </View>
    <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} renderItem={itemData=>{
      return (
        <GoalItem/>
      )
    }} 
    keyExtractor={(item,index)=>{
      return item.id;
    }}
    alwaysBounceVertical={false} />
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
  },
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    padding:8,
  },
  goalText:{
    color:'white'
  }
});
