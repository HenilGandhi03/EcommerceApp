import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const initialCart = [
  {
    id: '1',
    title: 'Naked & Raw Coffee Body Scrub',
    size: '100g',
    price: 12,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mocha Coffee Face Wash',
    size: '75ml',
    price: 18,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    quantity: 2,
  },
  {
    id: '3',
    title: 'Latte Coffee Moisturizer',
    size: '50ml',
    price: 15,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
    quantity: 1,
  },
];

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
        <Text style={{ fontSize: 20 }}>⋮</Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 180 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.size}>{item.size}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>

            <View style={styles.rightSection}>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={styles.delete}>🗑</Text>
              </TouchableOpacity>

              <View style={styles.qtyBox}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => decreaseQty(item.id)}
                >
                  <Text>−</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.quantity}</Text>

                <TouchableOpacity
                  style={[styles.qtyBtn, styles.qtyPlus]}
                  onPress={() => increaseQty(item.id)}
                >
                  <Text style={{ color: 'white' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* ORDER SUMMARY */}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>

        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text>Shipping</Text>
          <Text style={{ color: 'green' }}>Free</Text>
        </View>

        <View style={styles.row}>
          <Text>Tax (5%)</Text>
          <Text>${tax.toFixed(2)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
      </View>

      {/* CHECKOUT BUTTON */}
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.checkoutText}>
          Checkout ({cart.length} items) ${total.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F2EE' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 15,
  },

  back: { fontSize: 22 },
  title: { fontSize: 20, fontWeight: 'bold' },

  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 15,
  },

  productTitle: {
    fontWeight: '600',
  },

  size: {
    color: '#D97706',
    marginVertical: 4,
  },

  price: {
    color: '#D97706',
    fontWeight: 'bold',
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  delete: {
    fontSize: 18,
    marginBottom: 10,
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyBtn: {
    backgroundColor: '#EEE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  qtyPlus: {
    backgroundColor: '#D97706',
  },

  qty: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },

  summary: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },

  summaryTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 10,
  },

  totalText: {
    fontWeight: 'bold',
  },

  totalAmount: {
    fontWeight: 'bold',
    color: '#D97706',
  },

  checkoutBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#D97706',
    padding: 18,
    borderRadius: 40,
    alignItems: 'center',
  },

  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
