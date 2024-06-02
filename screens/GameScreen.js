import { StyleSheet, Text, View,SafeAreaView } from "react-native"
import Title from "../components/ui/Title"
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
export default function GameScreen({userNumber}) {
    const initialGuess=generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess]=useState(initialGuess)
  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
<NumberContainer>{currentGuess}</NumberContainer>
<View>
<Text>Higher or lower?</Text>
{/*+ -*/}
</View>
{/*<View>LOG ROUNDS</View>*/}

    </View>
    
  )
}
const styles=StyleSheet.create({
    screen:{
        marginTop:30,
        flex:1,
        padding:12,
    }
})
