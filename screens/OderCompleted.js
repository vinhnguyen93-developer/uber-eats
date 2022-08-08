import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';

import { db, collection, query, orderBy, limit, getDocs } from '../firebase';
import MenuItem from '../components/restaurantDetail/MenuItems';

export default function OderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://chefjob.vn/wp-content/uploads/2020/02/lasagna-mang-huong-vi-tinh-te.jpg',
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const unsubscribe = async () => {
      const q = query(
        collection(db, 'orders'),
        orderBy('createdAt', 'desc'),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((doc) => {
        setLastOrder(doc.data());
      });
    };

    unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Lottie
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <Lottie
            style={{ height: 200, alignSelf: 'center' }}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
