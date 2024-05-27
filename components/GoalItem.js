import {StyleSheet,View,Text,Pressable} from "react-native"

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
    <Pressable android_ripple={{ color:'#dddddd'}}
    style={({pressed})=> pressed && styles.pressedItem}
    onPress={props.onDeleteGoalItem.bind(this,props.id)}>

        <Text style={styles.goalText}>{props.text}</Text>
             
    </Pressable>
    </View>
    
  )
}

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
      },
      pressedItem:{
        opacity:0.4
      },
      goalText:{
        color:'white',
        padding:8,
      }
})
