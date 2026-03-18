import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../theme';

const TYPE_CONFIG = {
  HOME: { icon: '🏠', color: '#C4622D' },
  WORK: { icon: '💼', color: '#C4622D' },
  OTHER: { icon: '📍', color: '#C4622D' },
};

export const AddressCard = ({ address, onEdit, onDelete }) => {
  const { colors } = useTheme();
  const config = TYPE_CONFIG[address.type] ?? TYPE_CONFIG.OTHER;

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      {/* Top Row: type badge + actions */}
      <View style={styles.topRow}>
        <View style={styles.typeBadge}>
          <Text style={styles.typeIcon}>{config.icon}</Text>
          <Text style={[styles.typeLabel, { color: config.color }]}>
            {address.type}
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => onEdit(address)} style={styles.actionBtn}>
            <Text style={styles.actionIcon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(address.id)} style={styles.actionBtn}>
            <Text style={styles.actionIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Address Details */}
      <Text style={[styles.name, { color: colors.text }]}>{address.name}</Text>
      <Text style={[styles.line, { color: colors.textMuted }]}>{address.street}</Text>
      <Text style={[styles.line, { color: colors.textMuted }]}>{address.city}</Text>
      <Text style={[styles.line, { color: colors.textMuted }]}>{address.country}</Text>
      <Text style={[styles.phone, { color: colors.text }]}>{address.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5EDE6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  typeIcon: { fontSize: 14 },
  typeLabel: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  actions: { flexDirection: 'row', gap: 8 },
  actionBtn: { padding: 4 },
  actionIcon: { fontSize: 16 },
  name: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  line: { fontSize: 14, lineHeight: 22 },
  phone: { fontSize: 14, fontWeight: '500', marginTop: 8 },
});