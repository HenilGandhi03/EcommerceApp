import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryItem({ label }) {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryCircle} />
      <Text style={styles.categoryText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: { alignItems: 'center' },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5D5C5',
    marginBottom: 8,
  },
  categoryText: { fontSize: 13 },
});