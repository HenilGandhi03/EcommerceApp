import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { useCart } from '../../context/CartContext';
import { AddressSection } from './components/AddressSection';
import { PaymentMethod } from './components/PaymentMethod';
import { OrderSummary } from './components/OrderSummary';
import { CheckoutFooter } from './components/CheckoutFooter';

export default function CheckoutScreen({ navigation, route }) {
  const { colors } = useTheme();
  const { cart } = useCart();
  
  const total = route.params?.total || 0;
  const subtotal = total / 1.05; 
  const tax = total - subtotal;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      {/* HEADER: Updated to use the CartScreen triangle arrow */}
      <View style={[styles.header, { backgroundColor: colors.headerBg }]}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backBtn}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          {/* Replaced the Text arrow with the View-based arrow from CartScreen */}
          <View style={styles.backArrow} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>CHECKOUT</Text>
        
        {/* Empty View to maintain flexbox spacing */}
        <View style={styles.backBtn} /> 
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <AddressSection />
        <PaymentMethod />
        <OrderSummary subtotal={subtotal} tax={tax} total={total} />
      </ScrollView>

      <CheckoutFooter 
        total={total} 
        itemCount={cart.length} 
        onCheckout={() => alert('Order Placed Successfully!')} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    height: 60 
  },
  headerTitle: { 
    color: 'white', 
    fontWeight: '800', 
    letterSpacing: 1, 
    fontSize: 16,
    flex: 1,
    textAlign: 'center'
  },
  backBtn: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  /* Triangle logic copied exactly from CartScreen */
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
  }
});