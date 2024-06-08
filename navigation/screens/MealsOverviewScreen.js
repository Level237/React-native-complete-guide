import { View, Text,StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';
import {  useLayoutEffect } from 'react';

export default function MealsOverviewScreen({route,navigation}) {

   
    const categoryId=route.params.categoryId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(categoryId)>=0;
    })

    

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>category.id===categoryId);
        navigation.setOptions({
            title:categoryTitle.title
        })
    },[categoryId,navigation])
   
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
           id={item.id}
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