// src/screens/Cart/components/PromoCode.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const PromoCode = () => {
  const { colors, sizes } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderRadius: sizes.radiusL }]}>
      <View style={styles.inputArea}>
        <Text style={styles.icon}>🏷</Text>
        <TextInput 
          placeholder="Enter promo code" 
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={[styles.applyBtn, { backgroundColor: colors.lightBeige }]}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    marginHorizontal: 20, 
    padding: 10, 
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'space-between'
  },
  inputArea: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  icon: { marginRight: 10, fontSize: 18 },
  input: { flex: 1, fontSize: 14 },
  applyBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 12 },
  applyText: { fontWeight: '700', color: '#1A1412' }
});