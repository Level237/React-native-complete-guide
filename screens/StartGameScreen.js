import {TextInput, View,StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  return <View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} autoCapitalize='none' />
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
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:"bold",
        textAlign:"center"
    }
})