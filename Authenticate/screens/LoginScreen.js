import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';

function LoginScreen() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  async function loginHandler({email,password}){
    setIsAuthenticated(true)
    await login(email,password)
    setIsAuthenticated(false)
  }

  if(isAuthenticated){
    return <LoadingOverlay message="Logging in..."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;