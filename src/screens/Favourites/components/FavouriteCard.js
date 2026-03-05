import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../../theme';

export const FavouriteCard = ({ item, onRemove, onAddToCart, navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      activeOpacity={0.92}
      onPress={() => navigation?.navigate('ProductDetails', { product: item })}
    >
      {/* Image */}
      <View style={[styles.imageWrapper, { backgroundColor: item.bgColor || '#F3EBE0' }]}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

        {/* Heart / Remove button */}
        <TouchableOpacity
          style={[styles.heartBtn, { backgroundColor: colors.surface }]}
          onPress={() => onRemove(item.id)}
        >
          <Text style={{ fontSize: 15, color: colors.brandGold }}>♥</Text>
        </TouchableOpacity>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={[styles.productTitle, { color: colors.text }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.subtitle, { color: colors.accent }]}>{item.size}</Text>

        <View style={styles.bottomRow}>
          <Text style={[styles.price, { color: colors.text }]}>{item.price}</Text>

          <TouchableOpacity
            style={[styles.cartBtn, { backgroundColor: colors.headerBg }]}
            onPress={() => onAddToCart(item)}
          >
            <Text style={{ fontSize: 16 }}>🛍</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  imageWrapper: { height: 200, position: 'relative' },
  image: { width: '100%', height: '100%' },
  heartBtn: {
    position: 'absolute',
    top: 12, right: 12,
    width: 34, height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  info: { padding: 14 },
  productTitle: { fontSize: 15, fontWeight: '700', lineHeight: 21, marginBottom: 4 },
  subtitle: { fontSize: 13, fontWeight: '500', marginBottom: 10 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: '800' },
  cartBtn: {
    width: 40, height: 40, borderRadius: 20,
    justifyContent: 'center', alignItems: 'center',
    elevation: 2,
  },
});