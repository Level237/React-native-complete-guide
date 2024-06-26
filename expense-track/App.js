import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpensesScreen from './screens/AllExpensesScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpenseScreen';
import { GlobalStyles } from './constants/style';
import {Ionicons} from "@expo/vector-icons"
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expense-context';


const Stack=createStackNavigator();
const BottomTabs=createBottomTabNavigator();

function ExpensesOverview(){
  return <BottomTabs.Navigator screenOptions={({navigation})=>({
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
    headerRight:({tintColor})=><IconButton 
    icon="add" 
    size={24} 
    color={tintColor} 
    onPress={()=>{navigation.navigate('ManageExpense')}}/>
  })
   
   }>
          <BottomTabs.Screen name="RecentExpenses" component={RecentExpenseScreen}
          options={{ 
            title:'Recent Expenses',
            tabBarLabel:'Recent',
            tabBarIcon:({color,size})=><Ionicons name="hourglass" size={size} color={color}/>,
           }}
          />
          <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen}
           options={{ 
            title:'All Expenses',
            tabBarLabel:'All Expenses',
            tabBarIcon:({color,size})=><Ionicons name="calendar" size={size} color={color}/>
           }}
          />
  </BottomTabs.Navigator>
}
export default function App() {
  return (
    <>
    <ExpensesContextProvider>
    <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{ 
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:'white',
         }}
        >
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={
            {
              headerShown:false
            }
          }/>
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen}
          options={{ 
           
           presentation:'modal',
           }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
    
    </>
     
 
  );
}


