import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { colors } = useTheme();

  // Logic to prevent double dollar signs
  const formatPrice = (price) => {
    const p = typeof price === 'string' ? price : `$${price.toFixed(2)}`;
    return p.startsWith('$') ? p : `$${p}`;
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Image source={{ uri: item.img || item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.itemTitle, { color: colors.text }]}>{item.name || item.title}</Text>
        <Text style={{ color: colors.brandGold, fontSize: 12 }}>{item.size || 'Standard'}</Text>
        <Text style={[styles.priceText, { color: colors.text }]}>
          {formatPrice(item.price)}
        </Text>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={onRemove}>
          <Text style={{ fontSize: 18 }}>🗑</Text>
        </TouchableOpacity>
        
        <View style={[styles.qtyContainer, { backgroundColor: colors.background }]}>
          <TouchableOpacity onPress={onDecrease} style={styles.qtyBtn}>
            <Text style={{ color: colors.text }}>−</Text>
          </TouchableOpacity>
          <Text style={[styles.qtyText, { color: colors.text }]}>{item.quantity}</Text>
          <TouchableOpacity 
            onPress={onIncrease} 
            style={[styles.qtyBtn, { backgroundColor: colors.brandGold }]}
          >
            <Text style={{ color: 'white' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 15, marginHorizontal: 20, marginBottom: 12, borderRadius: 20, alignItems: 'center', elevation: 2 },
  image: { width: 80, height: 80, borderRadius: 15 },
  details: { flex: 1, marginLeft: 15 },
  itemTitle: { fontWeight: '700', fontSize: 14 },
  priceText: { fontWeight: '800', fontSize: 16, marginTop: 5 },
  rightSection: { alignItems: 'flex-end', gap: 10 },
  qtyContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 2 },
  qtyBtn: { width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  qtyText: { marginHorizontal: 10, fontWeight: '700' }
});