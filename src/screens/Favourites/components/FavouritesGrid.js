import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FavouriteCard } from './FavouriteCard';

export const FavouritesGrid = ({ items, onRemove, onAddToCart, navigation }) => {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <View style={styles.grid}>
      {rows.map((row, idx) => (
        <View key={idx} style={styles.row}>
          {row.map((item) => (
            <FavouriteCard
              key={item.id}
              item={item}
              onRemove={onRemove}
              onAddToCart={onAddToCart}
              navigation={navigation}
            />
          ))}
          {/* Empty slot filler for odd items */}
          {row.length === 1 && <View style={styles.empty} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { paddingHorizontal: 8, paddingTop: 16 },
  row: { flexDirection: 'row' },
  empty: { flex: 1, margin: 8 },
});