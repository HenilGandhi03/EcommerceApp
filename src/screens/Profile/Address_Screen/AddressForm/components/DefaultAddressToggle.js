import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../../theme';

export const DefaultAddressToggle = ({ value, onToggle }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.row} onPress={onToggle} activeOpacity={0.7}>
      <View style={[
        styles.checkbox,
        { borderColor: value ? '#C4622D' : colors.textMuted },
        value && styles.checked,
      ]}>
        {value && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={[styles.text, { color: colors.text }]}>
        Set as default address
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  checkbox: {
    width: 22, height: 22, borderRadius: 11,
    borderWidth: 2,
    justifyContent: 'center', alignItems: 'center',
  },
  checked: { backgroundColor: '#C4622D' },
  tick: { color: 'white', fontSize: 12, fontWeight: '800' },
  text: { fontSize: 15, fontWeight: '500' },
});