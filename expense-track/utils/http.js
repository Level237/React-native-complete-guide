import axios from "axios";
export function storeExpense(expenseData){
axios.post("https://react-native-course-d0a2f-default-rtdb.firebaseio.com/expenses.json",
expenseData
)


}