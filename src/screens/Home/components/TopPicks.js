import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../theme/index';
import { Typography } from '../../../theme/typography';
import { useCart } from '../../../context/CartContext';
import { useFavorites } from '../../../context/FavoriteContext';

export const TopPicks = ({ data, navigation }) => {
  const { colors, sizes } = useTheme();
  const { cart, addToCart, updateQty } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {Typography.strings.topPicksTitle}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MainTabs', { screen: 'Shop' })
          }
        >
          <Text style={{ color: colors.textMuted }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: sizes.padding,
          paddingBottom: sizes.padding,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const cartItem = cart.find(c => c.id === item.id);
          const qty = cartItem?.quantity || 0;
          const fav = isFavorite(item.id); 

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
              style={[
                styles.card,
                {
                  width: sizes.productCardWidth,
                  backgroundColor: colors.surface,
                },
              ]}
            >
              {/* IMAGE */}
              <View
                style={[
                  styles.imgContainer,
                  { height: sizes.productImgHeight },
                ]}
              >
                <Image source={{ uri: item.img }} style={styles.img} />
              </View>

              {/* TEXT */}
              <Text style={[styles.name, { color: colors.text }]}>
                {item.name}
              </Text>

              <Text style={styles.sub}>{item.sub}</Text>

              {/* FOOTER */}
              <View style={styles.footer}>
                <Text style={[styles.price, { color: colors.text }]}>
                  ₹{item.price}
                </Text>

                <View style={styles.actions}>
                  
                  {/* ❤️ FAVORITE */}
                  <TouchableOpacity onPress={() =>   toggleFavorite(item)}>
                    <Text style={{ fontSize: 18 }}>
                      {fav ? '❤️' : '🤍'}
                    </Text>
                  </TouchableOpacity>

                  {/* 🛒 CART CONTROL */}
                  {qty === 0 ? (
                    // ➕ ADD BUTTON
                    <TouchableOpacity
                      style={[styles.addBtn, { backgroundColor: '#000' }]}
                      onPress={() =>
                        addToCart({ ...item, quantity: 1 })
                      }
                    >
                      <Text style={styles.addText}>+</Text>
                    </TouchableOpacity>
                  ) : (
                    // 🔥 COUNTER
                    <View
                      style={[
                        styles.counter,
                        { backgroundColor: colors.background },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => updateQty(item.id, -1)}
                        style={styles.counterBtn}
                      >
                        <Text style={{ fontSize: 16 }}>−</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.qtyText,
                          { color: colors.text },
                        ]}
                      >
                        {qty}
                      </Text>

                      <TouchableOpacity
                        onPress={() => updateQty(item.id, 1)}
                        style={styles.counterBtn}
                      >
                        <Text style={{ fontSize: 16 }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

/* STYLES */
const styles = StyleSheet.create({
  container: { marginTop: 10 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    borderRadius: 25,
    padding: 12,
    marginRight: 15,
    elevation: 3,
    shadowOpacity: 0.1,
  },

  imgContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#F3E9DD',
  },

  img: {
    width: '100%',
    height: '100%',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },

  sub: {
    fontSize: 10,
    color: '#888',
    marginVertical: 4,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontWeight: 'bold',
  },

actions: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: 70,
},

  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },

  counterBtn: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});