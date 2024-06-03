
import { StyleSheet,ImageBackground,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useCallback, useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {

  const [useNumber,setUserNumber]=useState('')
  const [gameIsOver,setGameIsOver]=useState(true)
  const [guessRounds,setGuessRounds]=useState(0)
  const [fontsLoaded,fontError]=useFonts({
    "open-sans":require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold":require('./assets/fonts/OpenSans-Bold.ttf')
  })
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0)
  }
  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(useNumber){
    screen=<GameScreen userNumber={useNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && useNumber){
    screen=<GameOverScreen useNumber={useNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return( <LinearGradient onLayout={onLayoutRootView} colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
<ImageBackground 
source={require('./assets/images/background.png')} 
resizeMode='cover' 
style={styles.rootScreen} 
imageStyle={styles.backgroundImage}
>
  <SafeAreaView style={styles.rootScreen}>
  {screen}
  </SafeAreaView>

</ImageBackground>

  </LinearGradient>)

}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
