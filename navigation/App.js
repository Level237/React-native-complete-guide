import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

const Drawer=createDrawerNavigator();33
function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{ 
    headerStyle:{
      backgroundColor:"#351401",
    },
    headerTintColor:'white',
    sceneContainerStyle:{
      backgroundColor:'#3f2f25'
    },
    drawerContentStyle:{backgroundColor:"#351401"},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#e4baa1'
   }}>
    <Drawer.Screen name='Categories' component={CategoryScreen}
    options={{ 
      title:'All Categories',
      drawerIcon:({color,size})=><Ionicons name="list" color={color} size={size}/>
     }}
    />
    <Drawer.Screen name='Favorites' component={FavoriteScreen}
    options={{ 
      drawerIcon:({color,size})=><Ionicons name="star" color={color} size={size}/>
     }}
    />
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
