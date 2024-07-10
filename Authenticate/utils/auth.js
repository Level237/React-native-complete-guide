import axios from "axios"

const API_KEY="AIzaSyBlTy2_8WA3aOlSj9jkQJEs2qa2j7RZkyQ"

 async function Authenticate(mode,email,password){
    
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response=await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true
    })
   const token=response.data.idToken;

   return token;
}
 export function createUser(email,password){
   return Authenticate("signUp",email,password)
}

export function login(email,password){
    return Authenticate("signInWithPassword",email,password)
}