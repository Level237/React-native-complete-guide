import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {

  const [isAuthenticated,setIsAuthenticated]=useState(false)
  async function signupHandler({email,password}){
    setIsAuthenticated(true)
    await createUser(email,password)
    setIsAuthenticated(false)
  }

  if(isAuthenticated){
    return <LoadingOverlay message="Creating user..."/>
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;