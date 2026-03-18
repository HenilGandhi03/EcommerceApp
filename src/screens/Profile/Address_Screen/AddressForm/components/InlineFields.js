import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormField } from './FormField';

// Renders two FormFields side by side
export const InlineFields = ({ left, right }) => (
  <View style={styles.row}>
    <FormField style={styles.half} {...left} />
    <FormField style={styles.half} {...right} />
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12 },
  half: { flex: 1 },
});