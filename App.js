import { useState } from 'react';
import { StyleSheet, View,FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible,setModalIsVisible]=useState(false)
  const  [courseGoals,setCourseGoals]=useState([])
  
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endGoalHandler(){
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,{
      text:enteredGoalText,id:Math.random().toString()
    }])
   endGoalHandler()
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourse=>{
      return currentCourse.filter((goal)=>goal.id!==id)
    })
  }
  return (
    <View style={styles.appContainer}>
        <Button color="#5e0acc" onPress={startAddGoalHandler} title='Add New Goal'/>
       {modalIsVisible  && <GoalInput endModal={endGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler} />}
    <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} renderItem={itemData=>{
      return (
        <GoalItem text={itemData.item.text} onDeleteGoalItem={deleteGoalHandler} id={itemData.item.id}/>
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
 
  goalsContainer:{
    flex:5
  },
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    padding:8,
  },
 
});