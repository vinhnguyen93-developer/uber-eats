import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside bar',
    image_url:
      'https://timhomestay.vn/wp-content/uploads/2021/01/ppp-why-wont-anyone-rescue-restaurants-ft-blog0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'http://list.vn/wp-content/uploads/2020/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1200,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://fnbmarketing.vn/wp-content/uploads/2019/07/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 1100,
    rating: 4,
  },
];

export default function RestaurantItems({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
          key={index}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-40 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
