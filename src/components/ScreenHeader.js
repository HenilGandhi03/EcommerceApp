import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

/**
 * Shared header used across all screens.
 *
 * Props
 * ─────────────────────────────────────────
 * title          string      – centre label
 * onBack         fn | null   – renders back arrow when provided; pass null to hide
 * rightIcon      string      – emoji / text for the right button  (default: none)
 * onRightPress   fn          – handler for right button
 * searchValue    string      – makes the search bar visible when provided
 * onSearchChange fn          – TextInput onChangeText
 * searchPlaceholder string   – placeholder text
 * bottomRadius   number      – border-bottom radius (default: 28)
 * children                   – anything rendered below the nav row (e.g. avatar + stats)
 */


export const ScreenHeader = ({
  title = '',
  onBack,
  rightIcon,
  onRightPress,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search...',
  bottomRadius = 28,
  customNavRow,
  children,
}) => {
  const { colors, sizes } = useTheme();
  const radius = bottomRadius ?? sizes.headerCurve;
  const showSearch = searchValue !== undefined;

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: colors.headerBg,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        },
      ]}
    >
      <SafeAreaView edges={['top']} >
         {/* ── Use custom nav row if provided, otherwise default back|title|right ── */}
        {customNavRow ? customNavRow : (
          <View style={styles.navRow}>
            {onBack ? (
              <TouchableOpacity
                style={[styles.iconBtn, styles.iconBtnBg]}
                onPress={onBack}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              >
                <View style={styles.backArrow} />
              </TouchableOpacity>
            ) : (
              <View style={styles.iconBtn} />
            )}

            <Text style={styles.title}>{title}</Text>

            {rightIcon ? (
              <TouchableOpacity
                style={[styles.iconBtn, styles.iconBtnBg]}
                onPress={onRightPress}
              >
                <Text style={styles.iconText}>{rightIcon}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.iconBtn} />
            )}
          </View>
        )}

        {showSearch && (
          <View style={[styles.searchBar, { backgroundColor: 'rgba(255,255,255,0.10)' }]}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              value={searchValue}
              onChangeText={onSearchChange}
              placeholder={searchPlaceholder}
              placeholderTextColor="rgba(255,255,255,0.45)"
              style={styles.searchInput}
            />
          </View>
        )}

        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
    justifyContent: 'center',   // 👈 THIS
    minHeight: 70,             
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 56,
    paddingTop: 20,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBtnBg: {
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  backArrow: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'white',
    marginLeft: -2,
  },
  iconText: { color: 'white', fontSize: 18 },
  title: { color: 'white', fontWeight: '800', fontSize: 18, letterSpacing: 2 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
  searchIcon: { fontSize: 14, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14, color: 'white' },
});