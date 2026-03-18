import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../../theme';

const TYPES = [
  { key: 'HOME',  icon: '🏠', label: 'Home' },
  { key: 'WORK',  icon: '💼', label: 'Work' },
  { key: 'OTHER', icon: '📍', label: 'Other' },
];

export const AddressTypeSelector = ({ selected, onSelect }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: colors.text }]}>Save Address As</Text>
      <View style={styles.row}>
        {TYPES.map(type => {
          const active = selected === type.key;
          return (
            <TouchableOpacity
              key={type.key}
              onPress={() => onSelect(type.key)}
              style={[
                styles.chip,
                { backgroundColor: colors.surface },
                active && styles.chipActive,
              ]}
              activeOpacity={0.8}
            >
              <Text style={styles.chipIcon}>{type.icon}</Text>
              <Text style={[
                styles.chipLabel,
                { color: active ? '#C4622D' : colors.text },
              ]}>
                {type.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', gap: 10 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
    gap: 6,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  chipActive: {
    borderColor: '#C4622D',
    backgroundColor: '#FDF0E8',
  },
  chipIcon: { fontSize: 14 },
  chipLabel: { fontSize: 14, fontWeight: '600' },
});