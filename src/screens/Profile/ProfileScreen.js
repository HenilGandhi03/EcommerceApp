import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../theme';
import { ProfileHeader } from './components/ProfileHeader';
import { UpgradeBanner } from './components/UpgradeBanner';
import { MenuSection } from './components/MenuSection';

export default function ProfileScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

        {/* Stats now live inside ProfileHeader */}
        <ProfileHeader
          name="Sophia Mocha"
          status="Gold Member"
          points="1,250"
          vouchers="3"
          navigation={navigation}
        />

        <View style={styles.content}>
          <UpgradeBanner
            title="Unlock Platinum Status"
            subtitle="Spend $50 more to upgrade"
          />

          {/* Account Group */}
          <View style={[styles.menuCard, { backgroundColor: colors.surface }]}>
            <MenuSection title="Order History" icon="📜" />
            <View style={[styles.divider, { backgroundColor: colors.background }]} />
            <MenuSection title="Saved Addresses" icon="📍" />
            <View style={[styles.divider, { backgroundColor: colors.background }]} />
            <MenuSection
              title="Wishlist"
              icon="🤍"
              onPress={() => navigation.navigate('MainTabs', { screen: 'Favorites' })}
            />
          </View>

          {/* Preferences Group */}
          <View style={[styles.menuCard, { backgroundColor: colors.surface, marginTop: 16 }]}>
            <MenuSection title="Notifications" icon="🔔" badge="ON" />
            <View style={[styles.divider, { backgroundColor: colors.background }]} />
            <MenuSection title="Payment Methods" icon="💳" />
            <View style={[styles.divider, { backgroundColor: colors.background }]} />
            <MenuSection title="Help & Support" icon="❓" />
          </View>

          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={[styles.logoutText, { color: colors.textMuted }]}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 20 },
  menuCard: {
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  divider: { height: 1, marginHorizontal: 18 },
  logoutBtn: { alignItems: 'center', marginTop: 36 },
  logoutText: { fontSize: 16, fontWeight: '600' },
});