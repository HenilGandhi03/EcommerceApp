// src/screens/ProfileScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <Text style={styles.icon}>⚙</Text>
        </View>

        {/* PROFILE AVATAR */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={{ fontSize: 40 }}>👤</Text>
          </View>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={{ color: "white" }}>✎</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Sophia Mocha</Text>
        <Text style={styles.member}>Gold Member • Coffee Lover</Text>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1,250</Text>
            <Text style={styles.statLabel}>BEAN POINTS</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>VOUCHERS</Text>
          </View>
        </View>

        {/* UPGRADE BANNER */}
        <View style={styles.upgradeBanner}>
          <View>
            <Text style={styles.upgradeTitle}>Unlock Platinum</Text>
            <Text style={styles.upgradeSub}>
              Spend $50 more to upgrade
            </Text>
          </View>

          <View style={styles.badgeIcon}>
            <Text style={{ fontSize: 20 }}>🏅</Text>
          </View>
        </View>

        {/* MY ACCOUNT */}
        <Section title="MY ACCOUNT" />

        <MenuItem label="Order History" icon="📄" />
        <MenuItem label="Saved Addresses" icon="📍" />
        <MenuItem label="Wishlist" icon="❤️" />

        {/* PREFERENCES */}
        <Section title="PREFERENCES" />

        <MenuItem label="Notifications" icon="🔔" right="ON" />
        <MenuItem label="Payment Methods" icon="💳" />
        <MenuItem label="Help & Support" icon="❓" />

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- Components ---------- */

const Section = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const MenuItem = ({ label, icon, right }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <View style={styles.menuIcon}>
        <Text>{icon}</Text>
      </View>
      <Text style={styles.menuText}>{label}</Text>
    </View>

    {right ? (
      <View style={styles.rightBadge}>
        <Text style={{ color: "#D97706", fontWeight: "bold" }}>
          {right}
        </Text>
      </View>
    ) : (
      <Text style={{ color: "#999" }}>›</Text>
    )}
  </TouchableOpacity>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F2EE",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  icon: { fontSize: 22 },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FAD4C0",
    justifyContent: "center",
    alignItems: "center",
  },

  editBtn: {
    position: "absolute",
    right: 130,
    bottom: 10,
    backgroundColor: "#D97706",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  member: {
    textAlign: "center",
    color: "#D97706",
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },

  upgradeBanner: {
    margin: 20,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#4B2E1F",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  upgradeTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  upgradeSub: {
    color: "white",
    marginTop: 5,
  },

  badgeIcon: {
    backgroundColor: "#D97706",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#7C8A9A",
    fontWeight: "bold",
  },

  menuItem: {
    backgroundColor: "white",
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F2E8E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  menuText: {
    fontSize: 16,
  },

  rightBadge: {
    backgroundColor: "#FCE8D8",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },

  logoutBtn: {
    alignItems: "center",
    marginTop: 30,
  },

  logoutText: {
    color: "red",
    fontSize: 16,
  },
});