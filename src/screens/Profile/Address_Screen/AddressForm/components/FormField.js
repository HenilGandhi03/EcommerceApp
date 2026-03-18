import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../../../../theme';

export const FormField = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  optional = false,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.wrapper, style]}>
      <Text style={[styles.label, { color: colors.text }]}>
        {label}
        {optional && <Text style={{ color: colors.textMuted }}> (Optional)</Text>}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        keyboardType={keyboardType}
        style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: {
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 15,
  },
});