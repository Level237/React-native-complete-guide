import { CATEGORIES, MEALS } from '../data/dummy-data'
import {  useLayoutEffect } from 'react';
import MealList from '../components/MealList/MealList';

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
   
    return <MealList items={displayedMeals}/>
  
}

