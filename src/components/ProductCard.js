import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ title, subtitle, price }) {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productSubtitle}>{subtitle}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: 'white' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  productImage: {
    height: 120,
    backgroundColor: '#F1E4D8',
    borderRadius: 15,
    marginBottom: 10,
  },
  productTitle: { fontWeight: 'bold' },
  productSubtitle: {
    fontSize: 12,
    color: '#777',
    marginVertical: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: { color: '#D97706', fontWeight: 'bold' },
  addBtn: {
    backgroundColor: '#D97706',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});