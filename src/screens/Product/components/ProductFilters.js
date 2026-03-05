import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';

const FILTERS = ['Best Sellers', 'New', 'Under $15', 'Face', 'Body'];

export const ProductFilters = () => {
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('Best Sellers');

  return (
    <View style={styles.container}>
      {/* Filter & Sort */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.controlBtn, { backgroundColor: colors.headerBg }]}>
          <Text style={styles.controlBtnText}>⚙  Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sortBtn, { borderColor: colors.textMuted + '44', backgroundColor: colors.surface }]}>
          <Text style={[styles.sortText, { color: colors.text }]}>Sort By  ▾</Text>
        </TouchableOpacity>
      </View>

      {/* Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f;
          return (
            <TouchableOpacity
              key={f}
              onPress={() => setActiveFilter(f)}
              style={[
                styles.chip,
                {
                  // ✅ Active = dark brown, inactive = white/surface
                  backgroundColor: isActive ? colors.headerBg : colors.surface,
                  borderColor: isActive ? colors.headerBg : colors.textMuted + '33',
                },
              ]}
            >
              <Text style={[
                styles.chipText,
                { color: isActive ? 'white' : colors.textMuted }  // ✅ White text on dark
              ]}>
                {f}{isActive ? '  ✕' : ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 14, paddingBottom: 4 },
  row: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 12, gap: 10 },
  controlBtn: {
    paddingHorizontal: 18, paddingVertical: 9,
    borderRadius: 50, flexDirection: 'row', alignItems: 'center',
  },
  controlBtnText: { color: 'white', fontWeight: '700', fontSize: 13 },
  sortBtn: {
    paddingHorizontal: 18, paddingVertical: 9,
    borderRadius: 50, borderWidth: 1,
  },
  sortText: { fontWeight: '600', fontSize: 13 },
  chips: { paddingHorizontal: 20, gap: 8 },
  chip: {
    paddingHorizontal: 16, paddingVertical: 8,
    borderRadius: 50, borderWidth: 1,
  },
  chipText: { fontSize: 13, fontWeight: '600' },
});