import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTheme } from '../../../theme';
import { useCart } from '../../../context/CartContext';

export const FavouriteCard = ({ item, onRemove, navigation }) => {
  const { colors } = useTheme();
  const { cart, addToCart, updateQty } = useCart();

  const cartItem = cart.find(c => c.id === item.id);
  const qty = cartItem?.quantity || 0;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      activeOpacity={0.92}
      onPress={() =>
        navigation?.navigate('ProductDetails', { product: item })
      }
    >
      {/* IMAGE */}
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

        {/* ❤️ REMOVE FROM FAVORITES */}
        <TouchableOpacity
          style={[styles.heartBtn, { backgroundColor: colors.surface }]}
          onPress={() => onRemove(item)}
        >
          <Text style={{ fontSize: 15, color: colors.brandGold }}>
            ♥
          </Text>
        </TouchableOpacity>
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text
          style={[styles.productTitle, { color: colors.text }]}
          numberOfLines={2}
        >
          {item.name}
        </Text>

        <Text style={[styles.subtitle, { color: colors.accent }]}>
          {item.sub}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={[styles.price, { color: colors.text }]}>
            ₹{item.price}
          </Text>

          {/* 🛒 CART CONTROL */}
          {qty === 0 ? (
            <TouchableOpacity
              style={[styles.addBtn, { backgroundColor: colors.headerBg }]}
              onPress={() =>
                addToCart({ ...item, quantity: 1 })
              }
            >
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          ) : (
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

  imageWrapper: {
    height: 200,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  heartBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  info: {
    padding: 14,
  },

  productTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 18,
    fontWeight: '800',
  },

  /* 🔥 ADD BUTTON */
  addBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* 🔥 COUNTER */
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },

  counterBtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});