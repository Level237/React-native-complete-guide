import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({navigation}) {

  function openDrawerHandler(){
  
  }
  return (
    <View style={styles.rootContainer}>33333
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open drawer' onPress={openDrawerHandler}/>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
