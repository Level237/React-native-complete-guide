import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ 
        headerStyle:{
          backgroundColor:"#351401",
        },
        headerTintColor:'white',
        contentStyle:{
          backgroundColor:'#3f2f25'
        }
       }}
      >
         <Stack.Screen name='MealsCategories' component={CategoryScreen}
         options={{ 
          title:'All Categories',
          }}
         />
         <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
      </Stack.Navigator>
     <View>
      
    </View>

    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
