import { View, Text,StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({route}) {

    
    const categoryId=route.params.categoryId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(categoryId)>=0;
    })

    function renderMealItem(itemData){
        const item=itemData.item;

    const mealsProps={
        title:item.title,
        imageUrl:item.imageUrl,
        affordability:item.affordability,
        complexity:item.complexity,
        duration:item.duration
    }
        return <View>
           <MealItem 
          {...mealsProps}
           />
           
        </View>
    }
  return (
    <View style={styles.container}>
      <FlatList 
      data={displayedMeals}
      keyExtractor={(item)=>item.id}
      renderItem={renderMealItem}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})