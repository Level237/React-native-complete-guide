import { StyleSheet, Text, View,Alert} from "react-native"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary=1;
  let maxBoundary=100
export default function GameScreen({userNumber,onGameOver}) {
    const initialGuess=generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess]=useState(initialGuess)
  useEffect(()=>{
    if(currentGuess===userNumber){
      onGameOver()
    }
  },[currentGuess,userNumber,onGameOver])
    function nextGuestHandler(direction){ // direction=>'lower' , 'greater'

        if((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)){
            Alert.alert("Don't lie!",
            "You know that this wrong...",
            [{text:'Sorry!',style:"cancel"}])
            return ;
        }
        if(direction==='lower'){
            maxBoundary=currentGuess;
        }else if(direction==="greater"){
            minBoundary=currentGuess + 1;
        }
        console.log(minBoundary,maxBoundary)
        const newRndNumber=generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber)
    }
  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
<NumberContainer>{currentGuess}</NumberContainer>
<View>
<Text>Higher or lower?</Text>
<View>
<PrimaryButton onPress={nextGuestHandler.bind(this,'lower')}>-</PrimaryButton>
<PrimaryButton onPress={nextGuestHandler.bind(this,'greater')}>+</PrimaryButton>
</View>

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
