import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';

import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://chefjob.vn/wp-content/uploads/2020/02/lasagna-mang-huong-vi-tinh-te.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish with tenderloin chicken off the sizzles',
    price: '$19.20',
    image:
      'https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20-500x400.jpg',
  },
  {
    title: 'Chilaquiles',
    description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Chicken Caesar Salad',
    description: 'One can never go wrong with a chicken caesar salad. Healthy',
    price: '$21.50',
    image:
      'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg',
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
