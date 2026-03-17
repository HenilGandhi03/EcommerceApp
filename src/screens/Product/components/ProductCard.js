import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../../theme';
import { useFavorites } from '../../../context/FavoriteContext';

export const ProductCard = ({ item, navigation }) => {
  const { colors } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(item.id);
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      activeOpacity={0.92}
      onPress={() => navigation?.navigate('ProductDetails', { product: item })}
    >
      {/* Image area */}
      <View
        style={[
          styles.imageWrapper,
          { backgroundColor: item.bgColor || '#F3EBE0' },
        ]}
      >
        <Image
          source={{ uri: item.img }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Tag */}
        {item.tag && (
          <View
            style={[
              styles.tag,
              {
                backgroundColor:
                  item.tag === 'NEW' ? colors.accent : colors.brandGold,
              },
            ]}
          >
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
        )}

        {/* Wishlist */}
        <TouchableOpacity
          style={[styles.heartBtn, { backgroundColor: colors.surface }]}
          onPress={() => toggleFavorite(item)}
        >
          <Text
            style={{ fontSize: 14, color: fav ? '#E53935' : colors.textMuted }}
          >
            {fav ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <View style={styles.ratingRow}>
          <Text style={[styles.star, { color: colors.brandGold }]}>★</Text>
          <Text style={[styles.ratingText, { color: colors.textMuted }]}>
            {item.rating} ({item.reviews})
          </Text>
        </View>

        <Text
          style={[styles.productTitle, { color: colors.text }]}
          numberOfLines={2}
        >
          {item.name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={[styles.price, { color: colors.text }]}>
            ₹{item.price}
          </Text>
          {item.oldPrice && (
            <Text style={[styles.oldPrice, { color: colors.textMuted }]}>
              {item.oldPrice}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  imageWrapper: {
    height: 170,
    position: 'relative',
  },
  image: { width: '100%', height: '100%' },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tag: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  info: { padding: 12 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  star: { fontSize: 12, marginRight: 3 },
  ratingText: { fontSize: 11 },
  productTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
    lineHeight: 19,
  },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  price: { fontWeight: '800', fontSize: 15 },
  oldPrice: { fontSize: 12, textDecorationLine: 'line-through' },
});
