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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { useCart } from '../../context/CartContext';

const { width } = Dimensions.get('window');

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const { colors, sizes } = useTheme(); // Colors are defined here
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const cleanPrice = p => {
    if (typeof p === 'number') return p;
    return parseFloat(p?.toString().replace(/[^0-9.]/g, '')) || 0;
  };

  const price = cleanPrice(product.price);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Image
            source={{ uri: product.img || product.image }}
            style={styles.image}
          />

          <View style={styles.headerOverlay}>
            <TouchableOpacity
              style={[
                styles.iconCircle,
                { backgroundColor: colors.background + '80' },
              ]}
              onPress={() => navigation.goBack()}
            >
              {/* FIX: Move borderRightColor here because it is dynamic */}
              <View
                style={[styles.backArrow, { borderRightColor: colors.headerBg }]}
              />
            </TouchableOpacity>

            <View style={styles.rightIcons}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: colors.background + '80' },
                ]}
              >
                <Text style={{ fontSize: 18 }}>🤎</Text>
              </View>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: colors.background + '80' },
                ]}
              >
                <Text style={{ fontSize: 18 }}>🛍️</Text>
              </View>
            </View>
          </View>

          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>
              {product.rating} ★ | {product.reviews} Reviews
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.details,
            { backgroundColor: colors.surface, marginTop: -sizes.headerCurve },
          ]}
        >
          <Text style={[styles.category, { color: colors.accent }]}>
            FACE CARE
          </Text>

          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.text }]}>
              {product.name || product.title}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={[styles.price, { color: colors.text }]}>
                ${price.toFixed(2)}
              </Text>
              {product.oldPrice && (
                <Text style={styles.oldPrice}>
                  ${cleanPrice(product.oldPrice).toFixed(2)}
                </Text>
              )}
            </View>
          </View>

          <Text style={styles.subtitle}>Hyaluronic Acid • Pro-Vitamin B5</Text>

          <View style={styles.featuresRow}>
            <FeatureIcon label="100% VEGAN" icon="🍃" />
            <FeatureIcon label="PARABEN FREE" icon="🚫" />
            <FeatureIcon label="CRUELTY FREE" icon="🐾" />
            <FeatureIcon label="DERMA TESTED" icon="🧪" />
          </View>

          <Text style={[styles.sectionHeader, { color: colors.text }]}>
            Product Description
          </Text>
          <Text style={[styles.description, { color: colors.textMuted }]}>
            Awaken your skin with the rich aroma of pure Arabica coffee. This
            potent formula deeply cleanses to remove dirt, oil, and impurities
            while retaining essential moisture.
          </Text>
          <TouchableOpacity>
            <Text style={[styles.readMore, { color: colors.accent }]}>
              READ MORE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={[
          styles.bottomBar,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.background,
          },
        ]}
      >
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

        <TouchableOpacity
          style={[styles.addBtn, { backgroundColor: colors.headerBg }]}
          onPress={() => addToCart({ ...product, quantity: qty })}
        >
          <Text style={styles.addBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const FeatureIcon = ({ label, icon }) => {
  const { colors } = useTheme(); // Hook used inside component
  return (
    <View style={styles.featureItem}>
      <View style={styles.iconBox}>
        <Text style={{ fontSize: 20 }}>{icon}</Text>
      </View>
      <Text style={[styles.featureLabel, { color: colors.textMuted }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: { height: 480, position: 'relative' },
  image: { width: width, height: '100%', resizeMode: 'cover' },
  headerOverlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightIcons: { flexDirection: 'row', gap: 10 },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    // borderRightColor REMOVED FROM HERE
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: { color: 'white', fontSize: 11, fontWeight: '700' },
  details: {
    flex: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 25,
    paddingBottom: 100,
  },
  category: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: { fontSize: 26, fontWeight: 'bold', flex: 1 },
  priceContainer: { alignItems: 'flex-end' },
  price: { fontSize: 24, fontWeight: 'bold' },
  oldPrice: { fontSize: 14, color: '#999', textDecorationLine: 'line-through' },
  subtitle: { color: '#888', marginVertical: 10, fontSize: 13 },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  featureItem: { alignItems: 'center', width: '22%' },
  featureLabel: {
    fontSize: 8,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },
  description: { lineHeight: 22, fontSize: 14 },
  readMore: { fontSize: 11, fontWeight: 'bold', marginTop: 5 },
  bottomBar: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  qtyBtn: { width: 30, alignItems: 'center' },
  qtyBtnText: { fontSize: 22 },
  qtyText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 15 },
  addBtn: {
    flex: 1,
    marginLeft: 20,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
