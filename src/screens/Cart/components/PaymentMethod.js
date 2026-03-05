import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const PaymentMethod = ({ selectedMethod }) => {
  const { colors, sizes } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Payment Method</Text>
      <View style={[styles.card, { backgroundColor: colors.surface, borderRadius: sizes.radiusM }]}>
        <View style={styles.methodRow}>
          <View style={[styles.radio, { borderColor: colors.brandGold, backgroundColor: colors.brandGold }]} />
          <Text style={[styles.methodText, { color: colors.text }]}>Mastercard **** 4242</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginVertical: 10 },
  title: { fontSize: 16, fontWeight: '800', marginBottom: 12 },
  card: { padding: 16 },
  methodRow: { flexDirection: 'row', alignItems: 'center' },
  radio: { width: 14, height: 14, borderRadius: 7, borderWidth: 2, marginRight: 12 },
  methodText: { fontWeight: '600' }
});