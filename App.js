
import { StyleSheet, View,FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return( <View style={styles.rootScreen}>

<StartGameScreen/>
  </View>)

}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    backgroundColor:'#ddb52f'
  }
});
