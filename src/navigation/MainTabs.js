import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // ✅
import { useTheme } from "../theme";

import HomeScreen from "../screens/Home/HomeScreen";
import ProductScreen from "../screens/Product/ProductScreen";
import CartScreen from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const { colors, isDarkMode } = useTheme();
  const insets = useSafeAreaInsets(); // ✅ Read actual device insets

  const TAB_HEIGHT = 50;
  const bottomPad = Platform.OS === "ios" ? insets.bottom : 0; // ✅ iOS needs inset, Android doesn't

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.brandGold,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarHideOnKeyboard: true, // ✅ Updated property name
        keyboardHidesTabBar: true, // ✅ Keep this for compatibility
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: isDarkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)",
          height: TAB_HEIGHT + bottomPad, // ✅ Exact height, no surprises
          paddingBottom: bottomPad,       // ✅ Only iOS gets safe area padding
          paddingTop: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 24 }}>🏠</Text>
              {focused && (
                <View style={[styles.indicator, { backgroundColor: color }]} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 24 }}>🛍</Text>
              {focused && (
                <View style={[styles.indicator, { backgroundColor: color }]} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={ProductScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={[
                styles.centerButton,
                { backgroundColor: colors.headerBg },
              ]}
            >
              <Text style={{ color: colors.brandGold, fontSize: 22 }}>❤️</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 24 }}>🛒</Text>
              {focused && (
                <View style={[styles.indicator, { backgroundColor: color }]} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 24 }}>👤</Text>
              {focused && (
                <View style={[styles.indicator, { backgroundColor: color }]} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  indicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});