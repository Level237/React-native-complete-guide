import {StyleSheet,View,Text,Pressable} from "react-native"

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteGoalItem}>
<View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
             </View>
    </Pressable>
    
  )
}

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        padding:8,
      },
      goalText:{
        color:'white'
      }
})
