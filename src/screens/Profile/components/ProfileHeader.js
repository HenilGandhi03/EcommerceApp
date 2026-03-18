import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { useTheme } from '../../../theme';

export const ProfileHeader = ({
  name,
  status,
  points,
  vouchers,
  navigation,
}) => {
  const { colors } = useTheme();

  return (
    <ScreenHeader
      title="My Profile"
      onBack={() => navigation.goBack()}
      rightIcon="⚙"
    >
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={[styles.avatarRing, { borderColor: colors.brandGold }]}>
          <View style={styles.avatarInner}>
            <Text style={{ fontSize: 38 }}>👤</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.editBtn, { backgroundColor: colors.surface }]}
        >
          <Text style={{ fontSize: 14, color: colors.headerBg }}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* Name & Status */}
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.statusRow}>
        <Text style={[styles.statusBadge, { color: colors.brandGold }]}>
          🏅 {status}
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{points}</Text>
          <Text style={styles.statLabel}>BEAN PTS</Text>
        </View>
        <View
          style={[
            styles.statDivider,
            { backgroundColor: 'rgba(255,255,255,0.2)' },
          ]}
        />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{vouchers}</Text>
          <Text style={styles.statLabel}>VOUCHERS</Text>
        </View>
      </View>
    </ScreenHeader>
  );
};

// only profile-specific styles remain here
const styles = StyleSheet.create({
  avatarWrapper: { alignItems: 'center', marginTop: 6, position: 'relative' },
  avatarRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    flex: 1,
    width: '100%',
    borderRadius: 46,
    backgroundColor: '#E5C9B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtn: {
    position: 'absolute',
    right: '50%',
    bottom: -5,
    marginRight: -58,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  nameText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 14,
  },
  statusRow: { alignItems: 'center', marginTop: 4 },
  statusBadge: { fontSize: 14 },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { color: 'white', fontSize: 22, fontWeight: '800' },
  statLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 0.5,
  },
  statDivider: { width: 1, height: 36, marginHorizontal: 20 },
});
