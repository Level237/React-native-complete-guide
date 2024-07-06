import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {

  const [isAuthenticated,setIsAuthenticated]=useState(false)
  async function signupHandler({email,password}){
    setIsAuthenticated(true)
    try {
      await createUser(email,password)
    } catch (error) {
      Alert.alert('Authentication failed!','Could not create user.Please check your credentials or try again later.')
    }
    setIsAuthenticated(false)
  }

  if(isAuthenticated){
    return <LoadingOverlay message="Creating user..."/>
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;