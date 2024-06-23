import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpensesScreen from './screens/AllExpensesScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpenseScreen';

const Stack=createNativeStackNavigator();
const BottomTabs=createBottomTabNavigator();

function ExpensesOverview(){
  return <BottomTabs.Navigator>
          <BottomTabs.Screen name="RecentExpenses" component={RecentExpenseScreen}/>
          <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen}/>
  </BottomTabs.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview}/>
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
     
 
  );
}


