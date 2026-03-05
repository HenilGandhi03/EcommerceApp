import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useTheme } from '../../../theme/index';

export const HomeHeader = ({ categories }) => {
  const { colors, sizes } = useTheme();

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.headerBg,
          borderBottomLeftRadius: sizes.headerCurve,
          borderBottomRightRadius: sizes.headerCurve,
        },
      ]}
    >
      {/* User Row */}
      <View style={styles.userRow}>
        <View style={styles.userInfo}>
          <View style={styles.avatar} />
          <View>
            <Text style={{ color: colors.textMuted }}>Good Morning</Text>
            <Text style={styles.userName}>Hello, Coffee Lover 👋</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconCircle}>
          {/* Increased Bell Icon size */}
          <Text style={[styles.whiteIcon, { fontSize: 24 }]}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar Row */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          {/* Increased Search Icon size */}
          <Text style={{ fontSize: 20 }}>🔍</Text>
          <TextInput 
            placeholder="Search for coffee skincare..." // Sample Text
            placeholderTextColor="#999"
            style={styles.input} 
          />
        </View>
      </View>

      {/* Categories with internal padding */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // Added horizontal padding to prevent icons from touching the header edges
        contentContainerStyle={[styles.catScroll, { paddingHorizontal: 20 }]} 
      >
        {categories.map(cat => (
          <TouchableOpacity key={cat.label} style={styles.catItem}>
            <View
              style={[
                styles.circle,
                { width: sizes.catCircle, height: sizes.catCircle },
              ]}
            >
              <Image source={{ uri: cat.img }} style={styles.img} />
            </View>
            <Text style={styles.catLabel}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { paddingBottom: 25 }, // Increased padding for better curve visibility
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  userInfo: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  avatar: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#CCC' },
  userName: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  searchRow: { paddingHorizontal: 20, marginBottom: 20 },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: 15,
    height: 50, // Increased height for the bigger search bar
    alignItems: 'center',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  catScroll: { paddingLeft: 5 },
  catItem: { marginRight: 15, alignItems: 'center' },
  circle: { borderRadius: 30, overflow: 'hidden', backgroundColor: '#EADBC8' },
  img: { width: '100%', height: '100%' },
  catLabel: { color: 'white', fontSize: 12, marginTop: 8, fontWeight: '500' },
  whiteIcon: { color: 'white' },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});