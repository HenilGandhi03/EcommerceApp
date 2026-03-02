import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#D97706",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>🏠</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>🛍</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>🛒</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}






  // /* ── BOTTOM NAV BAR ── */
  // bottomNav: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 72,
  //   backgroundColor: 'white',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   paddingHorizontal: 10,
  //   borderTopLeftRadius: 24,
  //   borderTopRightRadius: 24,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 16,
  //   shadowOffset: { width: 0, height: -4 },
  //   elevation: 10,
  // },
  // navItem: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  // },
  // navIcon: { fontSize: 22, color: '#999' },
  // navIconActive: { fontSize: 22, color: '#1A1412' },

  // /* Floating center button */
  // floatingBtnWrapper: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: -30,
  // },
  // floatingBtn: {
  //   width: 58,
  //   height: 58,
  //   borderRadius: 29,
  //   backgroundColor: '#1A1412',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: '#1A1412',
  //   shadowOpacity: 0.4,
  //   shadowRadius: 12,
  //   shadowOffset: { width: 0, height: 4 },
  //   elevation: 8,
  // },


  //  {/* BOTTOM NAVIGATION BAR */}
  //       <View style={styles.bottomNav}>
  //         <TouchableOpacity style={styles.navItem}>
  //           <Text style={styles.navIconActive}>⌂</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.navItem}>
  //           <Text style={styles.navIcon}>⊞</Text>
  //         </TouchableOpacity>
  
  //         {/* Floating center heart button */}
  //         <View style={styles.floatingBtnWrapper}>
  //           <TouchableOpacity style={styles.floatingBtn}>
  //             <Text style={{ color: 'white', fontSize: 20 }}>♥</Text>
  //           </TouchableOpacity>
  //         </View>
  
  //         <TouchableOpacity style={styles.navItem}>
  //           <Text style={styles.navIcon}>💬</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.navItem}>
  //           <Text style={styles.navIcon}>👤</Text>
  //         </TouchableOpacity>
  //       </View>