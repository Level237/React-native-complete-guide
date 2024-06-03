import { StyleSheet, Text,View } from "react-native";
import Colors from "../../constants/colors";


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
        color:'white',
        padding:10,
        textAlign:'center',
        borderWidth:2,
        borderColor:"white"
    }
})
