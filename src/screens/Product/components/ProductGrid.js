import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, navigation }) => {
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  return (
    <View style={styles.grid}>
      {rows.map((row, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {row.map((item) => (
            <ProductCard key={item.id} item={item} navigation={navigation} />
          ))}
          {/* Fill empty slot if odd number */}
          {row.length === 1 && <View style={styles.empty} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { paddingHorizontal: 10, paddingTop: 6 },
  row: { flexDirection: 'row' },
  empty: { flex: 1, margin: 6 },
});