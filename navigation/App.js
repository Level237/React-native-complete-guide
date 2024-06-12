import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
const Stack = createNativeStackNavigator();

const Drawer=createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{ 
    headerStyle:{
      backgroundColor:"#351401",
    },
    headerTintColor:'white',
    sceneContainerStyle:{
      backgroundColor:'#3f2f25'
    }
   }}>
    <Drawer.Screen name='Categories' component={CategoryScreen}
    options={{ 
      title:'All Categories'
     }}
    />
    <Drawer.Screen name='Favorites' component={FavoriteScreen}/>
  </Drawer.Navigator>;
}
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
         <Stack.Screen name='MealsCategories' component={DrawerNavigator}
         options={{ 
          title:'All Categories',
          headerShown:false
          }}
         />
         <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
         //options={({route,navigation})=>{
          //const categoryId=route.params.categoryId;
           //return {
            //title:categoryId
           //}
         //}}
         
         />
         <Stack.Screen name='MealsDetail' component={MealsDetailScreen}
        options={{ 
          title:'About the Meal'
          }}
         />
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
