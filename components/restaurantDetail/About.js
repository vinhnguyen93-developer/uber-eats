import React from 'react';
import { View, Text, Image } from 'react-native';

const image =
  'https://timhomestay.vn/wp-content/uploads/2021/01/ppp-why-wont-anyone-rescue-restaurants-ft-blog0420.jpg';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai • Comfort Food • $$ • 🎫 • 4⭐️ (2913+)';

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
