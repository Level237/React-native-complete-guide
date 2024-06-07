import { View, Text,FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'



export default function CategoryScreen({navigation}) {

    function renderCategoryItem(itemData) {

        function pressHandler(){
            navigation.navigate('MealsOverview',{categoryId:itemData.item.id})
        }
        return <CategoryGridTile
        onPress={pressHandler}
            title={itemData.item.title}
            color={itemData.item.color}/>
    }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  )
}