import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export const UpgradeBanner = ({ title, subtitle }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.banner, { backgroundColor: colors.isDarkMode ? '#3D2B1F' : '#F3E9DD' }]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>{subtitle}</Text>
      </View>
      <View style={[styles.iconBox, { backgroundColor: colors.surface }]}>
        <Text style={{ fontSize: 22 }}>💎</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 18, flexDirection: 'row', alignItems: 'center',
    borderRadius: 16, marginBottom: 20,
  },
  title: { fontWeight: '800', fontSize: 16 },
  subtitle: { fontSize: 12, marginTop: 4 },
  iconBox: {
    width: 50, height: 50, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center', elevation: 2,
  },
});