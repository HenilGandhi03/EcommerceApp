// // src/screens/Cart/OrderSummary.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useTheme } from '../../theme';

// export const OrderSummary = ({ subtotal = 0, tax = 0, total = 0 }) => {
//   const { colors } = useTheme();

//   return (
//     <View style={[styles.container, { backgroundColor: colors.surface }]}>
//       <Text style={[styles.summaryTitle, { color: colors.text }]}>Order Summary</Text>
      
//       <View style={styles.row}>
//         <Text style={styles.label}>Subtotal</Text>
//         <Text style={[styles.value, { color: colors.text }]}>
//           ${(subtotal || 0).toFixed(2)}
//         </Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>Shipping</Text>
//         <Text style={[styles.value, { color: 'green' }]}>Free</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>Tax (5%)</Text>
//         <Text style={[styles.value, { color: colors.text }]}>
//           ${(tax || 0).toFixed(2)}
//         </Text>
//       </View>

//       <View style={styles.divider} />

//       <View style={styles.totalRow}>
//         <Text style={[styles.totalLabel, { color: colors.text }]}>Total Amount</Text>
//         <Text style={[styles.totalAmount, { color: colors.brandGold }]}>
//           ${(total || 0).toFixed(2)}
//         </Text>
//       </View>
//     </View>
//   );
// };

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const OrderSummary = ({ subtotal = 0, tax = 0, total = 0 }) => {
  const { colors } = useTheme();

  // Safety check for NaN values
  const safeVal = (val) => (isNaN(val) ? 0 : val);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.summaryTitle, { color: colors.text }]}>Order Summary</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ${safeVal(subtotal).toFixed(2)}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={[styles.value, { color: 'green' }]}>Free</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tax (5%)</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ${safeVal(tax).toFixed(2)}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.totalRow}>
        <Text style={[styles.totalLabel, { color: colors.text }]}>Total Amount</Text>
        <Text style={[styles.totalAmount, { color: colors.brandGold }]}>
          ${safeVal(total).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginHorizontal: 20, borderRadius: 25, marginTop: 10 },
  summaryTitle: { fontSize: 18, fontWeight: '800', marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 },
  label: { color: '#888', fontWeight: '500' },
  value: { fontWeight: '700' },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 12 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalLabel: { fontSize: 16, fontWeight: '800' },
  totalAmount: { fontSize: 20, fontWeight: '900' }
});