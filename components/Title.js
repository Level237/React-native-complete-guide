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
        fontSize:24,
        fontWeight:'bold',
        color:'#ddb52f',
        textAlign:'center',
        borderWidth:2,
        borderColor:"#ddb52f"
    }
})
