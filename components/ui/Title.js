import { StyleSheet, Text,View } from "react-native";

export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    title:{
      fontFamily:"open-sans-bold",
        fontSize:24,
        //fontWeight:'bold',
        color:'white',
        padding:10,
        textAlign:'center',
        borderWidth:2,
        borderColor:"white",
        maxWidth:"80%",
        width:300
    }
})
