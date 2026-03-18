import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { useAddress } from '../../../context/AddressContext';
export const AddressSection = ({ selected, onSelect }) => {
  const { colors, sizes } = useTheme();
  const { addresses } = useAddress();

  const defaultAddress =
    addresses.find(a => a.isDefault) || addresses[0];

  if (!defaultAddress) {
    return (
      <View style={styles.container}>
        <Text style={{ color: colors.text }}>No address found</Text>
        <TouchableOpacity onPress={onSelect}>
          <Text style={{ color: colors.brandGold }}>Add Address</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        Delivery Address
      </Text>

      <TouchableOpacity
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderRadius: sizes.radiusM },
        ]}
        onPress={onSelect}
      >
        <View style={styles.info}>
          <Text style={[styles.label, { color: colors.text }]}>
            {defaultAddress.type}
          </Text>

          <Text style={{ color: colors.textMuted, fontSize: 12 }}>
            {defaultAddress.street}, {defaultAddress.city}
          </Text>
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