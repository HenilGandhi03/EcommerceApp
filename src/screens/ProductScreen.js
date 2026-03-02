import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRODUCTS = [
  {
    id: '1',
    title: 'Coffee Body Scrub',
    price: '$12.00',
    rating: '4.8',
    reviews: '12k',
    tag: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
  },
  {
    id: '2',
    title: 'Espresso Face Wash',
    price: '$18.00',
    oldPrice: '$24.00',
    rating: '4.8',
    reviews: '2.4k',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
  },
  {
    id: '3',
    title: 'Latte Body Butter',
    price: '$15.00',
    rating: '4.9',
    reviews: '2k',
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1620912189862-3f0d3a8d6f77',
  },
  {
    id: '4',
    title: 'Cappuccino Face Mask',
    price: '$11.00',
    rating: '4.7',
    reviews: '5.3k',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19',
  },
];

export default function ProductScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ProductCard item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Shop</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cart}>🛍</Text>
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBar}>
        <Text style={{ color: '#8C8C8C' }}>
          🔍 Search for coffee skincare...
        </Text>
      </View>

      {/* FILTER ROW */}
      <View style={styles.filterRow}>
        <Chip label="Filter" active dark />
        <Chip label="Sort By" />
        <Chip label="Best Sellers ✕" active />
      </View>

      {/* PRODUCT GRID */}
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
}

/* ---------------- PRODUCT CARD ---------------- */

const ProductCard = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      navigation.navigate('ProductDetails', { product: item })
    }
  >
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item.image }} style={styles.image} />

      {item.tag && (
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
      )}

      <View style={styles.heart}>
        <Text>♡</Text>
      </View>
    </View>

    <Text style={styles.productTitle}>{item.title}</Text>

    <Text style={styles.rating}>
      ⭐ {item.rating} ({item.reviews})
    </Text>

    <View style={styles.priceRow}>
      <Text style={styles.price}>{item.price}</Text>
      {item.oldPrice && (
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
      )}
    </View>
  </TouchableOpacity>
);

/* ---------------- CHIP COMPONENT ---------------- */

const Chip = ({ label, active, dark }) => (
  <View
    style={[
      styles.chip,
      active && styles.chipActive,
      dark && styles.chipDark,
    ]}
  >
    <Text
      style={[
        styles.chipText,
        active && { color: '#D97706' },
        dark && { color: 'white' },
      ]}
    >
      {label}
    </Text>
  </View>
);

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F2EE' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  title: { fontSize: 22, fontWeight: 'bold' },
  cart: { fontSize: 20 },

  searchBar: {
    margin: 20,
    backgroundColor: '#ECE7E1',
    padding: 15,
    borderRadius: 25,
  },

  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 10,
  },

  chipActive: {
    borderColor: '#D97706',
  },

  chipDark: {
    backgroundColor: '#1E1E1E',
    borderColor: '#1E1E1E',
  },

  chipText: {
    fontSize: 13,
  },

  card: {
    width: '48%',
    margin: '1%',
  },

  imageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    height: 180,
    width: '100%',
  },

  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tag: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  tagText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },

  productTitle: {
    marginTop: 8,
    fontWeight: '600',
  },

  rating: {
    fontSize: 12,
    color: '#777',
    marginVertical: 4,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    color: '#D97706',
    fontWeight: 'bold',
    marginRight: 8,
  },

  oldPrice: {
    color: '#999',
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
});