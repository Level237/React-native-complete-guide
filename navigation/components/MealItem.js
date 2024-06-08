import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable, Image,StyleSheet, Platform } from 'react-native'

export default function MealItem({title,imageUrl,duration,complexity,affordability,id}) {
    const navigation=useNavigation();
    function navigateToDetail(){
        navigation.navigate('MealsDetail',{mealId:id})
    }
  return (
    <View style={styles.mealItem}>
        <Pressable onPress={navigateToDetail} android_ripple={{ color:"#ccc" }}
        style={({pressed})=>pressed  ? styles.buttonPressed : null} 
        
        >

            <View>
            <View>
            <Image style={styles.image} source={{ uri:imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        </View>
       <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
       </View>
            </View>
       
        </Pressable>
    
    </View>
  )
}

const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"white",
        overflow:Platform.OS==='android' ? 'hidden' : 'visible',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.35,
        shadowOffset:{width:0,height:2},
        shadowRadius:16,
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContainer:{
        borderRadius:8,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})