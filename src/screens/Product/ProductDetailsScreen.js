import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../../theme';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';

const { width } = Dimensions.get('window');

const FEATURE_ICONS = {
  '100% Vegan': '🍃',
  'Paraben Free': '🚫',
  'Cruelty Free': '🐾',
  'Derma Tested': '🧪',
};

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  const { colors, sizes } = useTheme();
  const { cart, addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const fav = isFavorite(product.id);
  const features = product.category?.split(',').map(f => f.trim()) || [];

  const cartItem = cart.find(item => item.id === product.id);
  const alreadyInCartQty = cartItem?.quantity || 0;

  const handleAdd = () => {
    addToCart({ ...product, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGE */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.img }} style={styles.image} />

          {/* HEADER */}
          <View style={styles.headerOverlay}>
            {/* BACK */}
            <TouchableOpacity
              style={[styles.iconCircle, { backgroundColor: colors.headerBg }]}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  marginTop: -6,
                  fontWeight: 'bold',
                }}
              >
                ←
              </Text>
            </TouchableOpacity>

            {/* RIGHT ICONS */}
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {/* ❤️ FAVORITE */}
              <TouchableOpacity
                style={[
                  styles.iconCircle,
                  { backgroundColor: colors.headerBg },
                ]}
                onPress={() => toggleFavorite(product)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: fav ? 'red' : '#fff',
                  }}
                >
                  {fav ? '❤️' : '♡'}
                </Text>
              </TouchableOpacity>

              {/* 🛍️ CART */}
              <View>
                <TouchableOpacity
                  style={[
                    styles.iconCircle,
                    { backgroundColor: colors.headerBg },
                  ]}
                  onPress={() => navigation.navigate('Cart')}
                  activeOpacity={0.7}
                >
                  <Text style={{ fontSize: 18, color: '#fff' }}>🛍️</Text>
                </TouchableOpacity>

                {/* BADGE */}
                {totalCartItems > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{totalCartItems}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* DETAILS */}
        <View
          style={[
            styles.details,
            {
              backgroundColor: colors.surface,
              marginTop: -sizes.headerCurve,
            },
          ]}
        >
          <Text style={[styles.category, { color: colors.accent }]}>
            {product.tags
              ?.split(',')
              .map(tag => tag.trim().toUpperCase())
              .join(' • ')}
          </Text>

          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.text }]}>
              {product.name}
            </Text>

            <Text style={[styles.price, { color: colors.text }]}>
              ${product.price}.00
            </Text>
          </View>

          <Text style={styles.subtitle}>
            {product.sub || 'Hyaluronic Acid • Pro-Vitamin B5'}
          </Text>

          <View style={styles.featuresRow}>
            {features.map((feature, index) => (
              <FeatureIcon
                key={index}
                label={feature.toUpperCase()}
                icon={FEATURE_ICONS[feature] || '⭐'}
              />
            ))}
          </View>

          <Text style={[styles.sectionHeader, { color: colors.text }]}>
            Product Description
          </Text>

          <Text style={[styles.description, { color: colors.textMuted }]}>
            {product.description}
          </Text>

          <TouchableOpacity>
            <Text style={[styles.readMore, { color: colors.accent }]}>
              READ MORE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTTOM BAR */}
      <View
        style={[
          styles.bottomBar,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.background,
          },
        ]}
      >
        {/* QTY */}
        <View
          style={[styles.qtyContainer, { backgroundColor: colors.background }]}
        >
          <TouchableOpacity
            onPress={() => setQty(Math.max(1, qty - 1))}
            style={styles.qtyBtn}
          >
            <Text style={[styles.qtyBtnText, { color: colors.text }]}>−</Text>
          </TouchableOpacity>

          <Text style={[styles.qtyText, { color: colors.text }]}>{qty}</Text>

          <TouchableOpacity
            onPress={() => setQty(qty + 1)}
            style={styles.qtyBtn}
          >
            <Text style={[styles.qtyBtnText, { color: colors.text }]}>+</Text>
          </TouchableOpacity>
        </View>

        {/* ADD BUTTON */}
        <TouchableOpacity
          style={[
            styles.addBtn,
            {
              backgroundColor:
                alreadyInCartQty > 0 ? colors.brandGold : colors.headerBg,
            },
          ]}
          onPress={handleAdd}
        >
          <Text style={styles.addBtnText}>
            {added
              ? 'Added ✅'
              : alreadyInCartQty > 0
              ? `Added (${alreadyInCartQty})`
              : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* FEATURE ICON */
const FeatureIcon = ({ label, icon }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.featureItem}>
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <Text style={[styles.featureLabel, { color: colors.textMuted }]}>
        {label}
      </Text>
    </View>
  );
};

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1 },

  imageContainer: { height: 420 },

  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },

  headerOverlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },

  details: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    paddingBottom: 120,
  },

  category: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    flex: 1,
  },

  price: {
    fontSize: 28,
    fontWeight: '800',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 8,
  },

  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },

  featureItem: {
    alignItems: 'center',
    width: '22%',
  },

  featureLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
  },

  readMore: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 6,
  },

  bottomBar: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    alignItems: 'center',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  qtyBtn: {
    width: 30,
    alignItems: 'center',
  },

  qtyBtnText: {
    fontSize: 22,
  },

  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },

  addBtn: {
    flex: 1,
    marginLeft: 20,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
