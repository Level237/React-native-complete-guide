import { StyleSheet, Text, View,Alert, FlatList} from "react-native"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from "../components/game/GuessLogItem";
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
    const [currentGuess,setCurrentGuess]=useState(initialGuess);
    const [guessRound,setGuessRounds]=useState([])
  useEffect(()=>{
    if(currentGuess===userNumber){
      onGameOver(guessRound.length)
    }
  },[currentGuess,userNumber,onGameOver])

  useEffect(()=>{
    minBoundary=1,
    maxBoundary=100
  },[])
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
        setGuessRounds(prevGuessRounds=>[...prevGuessRounds,newRndNumber])
    }
    const guessRoundsListLength=guessRound.length;
  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
<NumberContainer>{currentGuess}</NumberContainer>
<Card>
<InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
<View style={styles.alignBtn}>
  <View style={styles.buttonContainer}>
  <PrimaryButton onPress={nextGuestHandler.bind(this,'lower')}>
    <Ionicons name="remove" size={24} color="white" />
  </PrimaryButton>
  </View>

  <View style={styles.buttonContainer}>
  <PrimaryButton onPress={nextGuestHandler.bind(this,'greater')}>
  <Ionicons name="add" size={24} color="white" />
  </PrimaryButton>
  </View>


</View>

</Card>
<View style={styles.listContainer} >
 {/*{  guessRound.map(guessRound=><Text key=guessRound>guessRound</Text>) }}*/}
 <FlatList data={guessRound} renderItem={(itemData)=>(<GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>
  )}
 keyExtractor={(item)=>item}
 />
</View>

    </View>
    
  )
}
const styles=StyleSheet.create({
    screen:{
        marginTop:30,
        flex:1,
        padding:12,
    },
    alignBtn:{
      flexDirection:"row"
  },
  buttonContainer:{
      flex:1
  },
  instructionText:{
    marginBottom:16
  },
  listContainer:{
    flex:1,
    padding:6
  }
})
