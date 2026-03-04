import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';

export const ProfileHeader = ({ name, status, points, vouchers, navigation }) => {
  const { colors, sizes } = useTheme();

  return (
    <View style={[
      styles.headerContainer, 
      { 
        backgroundColor: colors.headerBg,
        borderBottomLeftRadius: sizes.headerCurve, // Use modular size
        borderBottomRightRadius: sizes.headerCurve 
      }
    ]}>
      <SafeAreaView edges={['top']}>
        {/* Nav Row */}
        <View style={styles.navRow}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.navBtn}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            {/* Replaced text with the modular triangle arrow */}
            <View style={styles.backArrow} />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>My Profile</Text>
          
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <View style={[styles.avatarRing, { borderColor: colors.brandGold }]}>
            <View style={styles.avatarInner}>
              <Text style={{ fontSize: 38 }}>👤</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.editBtn, { backgroundColor: colors.surface }]}>
            <Text style={{ fontSize: 14, color: colors.headerBg }}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* Name & Status */}
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.statusRow}>
          <Text style={[styles.statusBadge, { color: colors.brandGold }]}>🏅 {status}</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{points}</Text>
            <Text style={styles.statLabel}>BEAN PTS</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: 'rgba(255,255,255,0.2)' }]} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{vouchers}</Text>
            <Text style={styles.statLabel}>VOUCHERS</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 30,
    // Radius values are now handled dynamically in the component style prop
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  navBtn: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  /* Modular Triangle Arrow Logic */
  backArrow: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'white',
    marginLeft: -2, // Centers the triangle visually
  },
  settingsIcon: { color: 'white', fontSize: 24 },
  headerTitle: { color: 'white', fontWeight: '800', fontSize: 18, letterSpacing: 0.5 },
  avatarWrapper: { alignItems: 'center', marginTop: 10, position: 'relative' },
  avatarRing: {
    width: 100, height: 100, borderRadius: 50,
    borderWidth: 2, padding: 4,
    justifyContent: 'center', alignItems: 'center',
  },
  avatarInner: {
    flex: 1, width: '100%', borderRadius: 46,
    backgroundColor: '#E5C9B8',
    justifyContent: 'center', alignItems: 'center',
  },
  editBtn: {
    position: 'absolute', right: '50%', bottom: -5,
    marginRight: -58,
    width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center',
    elevation: 4,
  },
  nameText: {
    color: 'white', textAlign: 'center',
    fontSize: 22, fontWeight: '800', marginTop: 14,
  },
  statusRow: { alignItems: 'center', marginTop: 4 },
  statusBadge: { fontSize: 14 },
  statsRow: {
    flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center', marginTop: 20,
    paddingHorizontal: 40,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { color: 'white', fontSize: 22, fontWeight: '800' },
  statLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 2, letterSpacing: 0.5 },
  statDivider: { width: 1, height: 36, marginHorizontal: 20 },
});