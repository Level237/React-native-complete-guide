import axios from "axios"

const API_KEY="AIzaSyBlTy2_8WA3aOlSj9jkQJEs2qa2j7RZkyQ"
 export async function createUser(email,password){
    const response=await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+API_KEY,
    {
        email:email,
        password:password,
        returnSecureToken:true
    });

}