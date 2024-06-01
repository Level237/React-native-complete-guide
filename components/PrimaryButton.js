import { View,TextInput, Text,Pressable,StyleSheet } from "react-native"

export default function PrimaryButton({children}) {
    function pressHandler(){
        console.log("pressed")
    }
  return (
    <View style={styles.buttonOutcontainer}>
    <Pressable style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color:"#644202" }}>
 
    <Text style={[styles.buttonText]}>{children}</Text>
 

    </Pressable>
    </View>
 
  )
}

const styles=StyleSheet.create({
    buttonOutContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor:'#72063c',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:4,
        padding:56
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
})
