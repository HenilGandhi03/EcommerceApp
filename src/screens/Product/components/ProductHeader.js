import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';

export const ProductHeader = ({ title = 'Shop', navigation, searchValue, onSearchChange }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.headerBg }]}>
      <SafeAreaView edges={['top']}>
        {/* Nav Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            onPress={() => navigation?.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {/* Replaced text with geometric arrow for consistency */}
            <View style={styles.backArrow} />
          </TouchableOpacity>

          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            onPress={() => navigation?.navigate('Cart')}
          >
            <Text style={styles.iconText}>🛍</Text>
          </TouchableOpacity>
        </View>

        {/* Search inside brown header */}
        <View style={[styles.searchBar, { backgroundColor: 'rgba(255,255,255,0.10)' }]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={searchValue}
            onChangeText={onSearchChange}
            placeholder="Search for coffee skincare..."
            placeholderTextColor="rgba(255,255,255,0.45)"
            style={styles.searchInput}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 54,
  },
  iconBtn: {
    width: 38, height: 38, borderRadius: 19,
    justifyContent: 'center', alignItems: 'center',
  },
  /* Consistent geometric triangle arrow */
  backArrow: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'white', // Color matches header style
    marginLeft: -2, // Visual centering adjustment
  },
  iconText: { color: 'white', fontSize: 18 },
  title: { color: 'white', fontWeight: '800', fontSize: 20, letterSpacing: 0.3 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
  searchIcon: { fontSize: 14, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14, color: 'white' },
});