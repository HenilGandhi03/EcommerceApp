import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme';
import { useCart } from '../../context/CartContext';
import { CartItem } from './components/CartItem';
import { OrderSummary } from './components/OrderSummary';
import { CheckoutFooter } from './components/CheckoutFooter';
import { PromoCode } from './components/PromoCode';
import { ScreenHeader } from '../../components/ScreenHeader';

export default function CartScreen({ navigation }) {
  const { colors } = useTheme();
  // Accessing global cart state from context
  const { cart, updateQty, removeItem } = useCart();

  const cleanPrice = price => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    const cleaned = price.toString().replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
  };

  const subtotal = (cart || []).reduce(
    (sum, item) => sum + cleanPrice(item.price) * (item.quantity || 1),
    0,
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

      <ScreenHeader
        title="Shopping Cart"
        onBack={() => navigation.goBack()}
        rightIcon="⋮"
        bottomRadius={0} // Cart header has no curve
      />

      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 180, paddingTop: 10 }}
        // Conditionally show Promo and Summary only if cart is not empty
        ListFooterComponent={
          cart.length > 0 ? (
            <>
              <PromoCode />
              <OrderSummary subtotal={subtotal} tax={tax} total={total} />
            </>
          ) : null
        }
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={() => updateQty(item.id, 1)}
            onDecrease={() => updateQty(item.id, -1)}
            onRemove={() => removeItem(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 100 }}>
            <Text style={{ fontSize: 40, marginBottom: 10 }}>🛒</Text>
            <Text style={{ color: '#888', fontSize: 24 }}>
              Your cart is empty
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainTabs', { screen: 'Shop' })
              }
              style={{ marginTop: 20, padding: 10 }}
            >
              <Text
                style={{
                  color: colors.brandGold,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                Go Shopping
              </Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* CONDITIONAL CHECKOUT FOOTER */}
      {cart.length > 0 && (
        <CheckoutFooter
          total={total}
          itemCount={cart.length}
          onCheckout={() => navigation.navigate('Checkout', { total })}
        />
      )}
      </View>
  );
}

// ... styles remain the same

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '800',
    letterSpacing: 1,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  backBtn: {
    width: 40,
    height: 40,
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
    borderRightColor: 'white',
    marginLeft: -2,
  },
  menuContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'white',
    marginVertical: 1,
  },
});
