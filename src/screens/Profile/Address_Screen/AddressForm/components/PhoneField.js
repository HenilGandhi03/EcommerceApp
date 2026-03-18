import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../../../../theme';

export const PhoneField = ({ label = 'Phone Number', value, onChangeText }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <View style={[styles.inputRow, { backgroundColor: colors.surface }]}>
        <Text style={[styles.prefix, { color: colors.textMuted }]}>+91</Text>
        <View style={[styles.divider, { backgroundColor: colors.background }]} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="9876543210"
          placeholderTextColor={colors.textMuted}
          keyboardType="phone-pad"
          style={[styles.input, { color: colors.text }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  prefix: { fontSize: 15, fontWeight: '500', marginRight: 10 },
  divider: { width: 1, height: 20, marginRight: 10 },
  input: { flex: 1, fontSize: 15 },
});