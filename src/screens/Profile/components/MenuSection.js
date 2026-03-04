import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';

export const MenuSection = ({ title, icon, badge, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.leftSide}>
        <View style={[styles.iconCircle, { backgroundColor: colors.background }]}>
          <Text style={{ fontSize: 16 }}>{icon || '📦'}</Text>
        </View>
        <Text style={[styles.label, { color: colors.text }]}>{title}</Text>
      </View>

      {badge ? (
        <View style={styles.row}>
          <Text style={styles.badgeText}>{badge}</Text>
          <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
        </View>
      ) : (
        <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15, paddingHorizontal: 18,
  },
  leftSide: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: {
    width: 38, height: 38, borderRadius: 19,
    justifyContent: 'center', alignItems: 'center', marginRight: 14,
  },
  label: { fontWeight: '600', fontSize: 15 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  badgeText: { color: '#D97706', fontWeight: 'bold', fontSize: 13 },
  chevron: { fontSize: 22, marginTop: -1 },
});