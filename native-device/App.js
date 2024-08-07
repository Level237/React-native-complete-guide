import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AllPlacesScreen from './screens/AllPlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <>
     <StatusBar style='light'/>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
          headerStyle:{backgroundColor:Colors.primary500},
          headerTintColor:Colors.gray700,
          contentStyle:{backgroundColor:Colors.gray700}
         }}>
          <Stack.Screen name='AllPlace' component={AllPlacesScreen}
          options={({navigation})=>({ 
            title:"Your favorites places",
            headerRight:({tintColor})=><IconButton 
            icon="add" 
            size={24} color={tintColor} 
            onPress={()=>navigation.navigate('AddPlace')}/>
           })}
          />
          <Stack.Screen name='AddPlace' component={AddPlaceScreen}
          options={
            {
              title:"Add a new Place"
            }
          }
          />
        </Stack.Navigator>
    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
