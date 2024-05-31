import {TextInput, View,StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  return <View style={styles.inputContainer}>
    <TextInput/>
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
  </View>
}

const styles=StyleSheet.create({
    inputContainer:{
       marginHorizontal:24,
        marginTop:100,
        backgroundColor:'#72063c',
        borderRadius:9,
        padding:16,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:1
    }
})