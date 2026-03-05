import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';

export const FavouritesHeader = ({ navigation, searchValue, onSearchChange }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.headerBg }]}>
      <SafeAreaView edges={['top']}>
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            onPress={() => navigation?.goBack()}
          >
            <Text style={styles.iconText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.title}>My Favorites</Text>

          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
          >
            <Text style={styles.iconText}>⋮</Text>
          </TouchableOpacity>
        </View>

        {/* Search inside dark header */}
        <View style={[styles.searchBar, { backgroundColor: 'rgba(255,255,255,0.10)' }]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={searchValue}
            onChangeText={onSearchChange}
            placeholder="Search favorites..."
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
  navRow: {
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
  iconText: { color: 'white', fontSize: 20 },
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