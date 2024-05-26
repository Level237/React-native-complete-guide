import {StyleSheet} from "react-native"

export default function GoalItem() {
  return (
    <View style={styles.goalItem} key={itemData.item.key}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
             </View>
  )
}

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        padding:8,
      },
})
