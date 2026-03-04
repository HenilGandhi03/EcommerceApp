import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../theme';

import { ProductHeader } from './components/ProductHeader';
import { ProductFilters } from './components/ProductFilters';
import { ProductGrid } from './components/ProductGrid';

const ALL_PRODUCTS = [
  {
    id: '1',
    title: 'Coffee Body Scrub',
    price: '$12.00',
    rating: '4.8',
    reviews: '12k',
    tag: 'BESTSELLER',
    bgColor: '#C8956C',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
  },
  {
    id: '2',
    title: 'Espresso Body Wash',
    price: '$9.50',
    oldPrice: '$12.00',
    rating: '4.6',
    reviews: '8.5k',
    bgColor: '#D4A574',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400',
  },
  {
    id: '3',
    title: 'Latte Body Butter',
    price: '$15.00',
    rating: '4.9',
    reviews: '2k',
    tag: 'NEW',
    bgColor: '#E8D5C4',
    image: 'https://images.unsplash.com/photo-1620912189862-3f0d3a8d6f77?w=400',
  },
  {
    id: '4',
    title: 'Cappuccino Face Mask',
    price: '$11.00',
    rating: '4.7',
    reviews: '5.3k',
    bgColor: '#D4B896',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400',
  },
  {
    id: '5',
    title: 'Green Tea Face Serum',
    price: '$18.00',
    rating: '4.5',
    reviews: '1.1k',
    bgColor: '#5C7A5C',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400',
  },
  {
    id: '6',
    title: 'Choco Body Butter',
    price: '$14.00',
    oldPrice: '$16.00',
    rating: '4.8',
    reviews: '9k',
    bgColor: '#3D2314',
    image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400',
  },
];

export default function ProductScreen({ navigation }) {
  const { colors } = useTheme();
  const [search, setSearch] = useState('');

  const filtered = ALL_PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ProductHeader title="Body Scrubs" navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <ProductFilters />
        <ProductGrid products={filtered} navigation={navigation} />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 20 },
});
