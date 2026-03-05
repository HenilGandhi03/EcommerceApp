import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';

export const FavouritesEmpty = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.emoji}>🤍</Text>
      <Text style={[styles.title, { color: colors.text }]}>No favorites yet</Text>
      <Text style={[styles.subtitle, { color: colors.textMuted }]}>
        Save products you love and find them here
      </Text>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: colors.headerBg }]}
        onPress={() => navigation?.navigate('Shop')}
      >
        <Text style={styles.btnText}>Browse Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', paddingTop: 80, paddingHorizontal: 40 },
  emoji: { fontSize: 60, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 8 },
  subtitle: { fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 28 },
  btn: {
    paddingHorizontal: 30, paddingVertical: 14,
    borderRadius: 50,
  },
  btnText: { color: 'white', fontWeight: '700', fontSize: 15 },
});