import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const CheckoutFooter = ({ total, itemCount, onCheckout }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.footer, { backgroundColor: colors.headerBg }]}>
      <View>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn} onPress={onCheckout}>
        <Text style={styles.btnText}>Checkout ({itemCount})</Text>
        <Text style={styles.arrow}> →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { position: 'absolute', bottom: 30, left: 20, right: 20, height: 85, borderRadius: 32, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 25, elevation: 10 },
  totalLabel: { color: '#888', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  totalValue: { color: 'white', fontSize: 20, fontWeight: '900', marginTop: 2 },
  checkoutBtn: { backgroundColor: 'rgba(255,255,255,0.15)', height: 50, paddingHorizontal: 20, borderRadius: 20, flexDirection: 'row', alignItems: 'center' },
  btnText: { color: 'white', fontWeight: '800', fontSize: 15 },
  arrow: { color: 'white', fontSize: 18 }
});
