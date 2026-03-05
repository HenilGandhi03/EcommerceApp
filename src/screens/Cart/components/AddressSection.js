import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const AddressSection = ({ selected, onSelect }) => {
  const { colors, sizes } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Delivery Address</Text>
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: colors.surface, borderRadius: sizes.radiusM }]}
        onPress={onSelect}
      >
        <View style={styles.info}>
          <Text style={[styles.label, { color: colors.text }]}>Home</Text>
          <Text style={{ color: colors.textMuted, fontSize: 12 }}>123 Coffee Lane, Mumbai, MH</Text>
        </View>
        <Text style={{ color: colors.brandGold }}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginVertical: 10 },
  title: { fontSize: 16, fontWeight: '800', marginBottom: 12 },
  card: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontWeight: '700', marginBottom: 4 }
});