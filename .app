import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
       <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course Goal'/>
      <Button title='Add Goal'/>
    </View>
    <View>
      <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   padding:50
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:"center",
    gap:16 
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:'80%',
  }
});
