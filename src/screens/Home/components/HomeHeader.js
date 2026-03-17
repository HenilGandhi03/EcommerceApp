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
import { ScreenHeader } from '../../../components/ScreenHeader';

export const HomeHeader = ({ categories, navigation }) => {
  const { colors, sizes } = useTheme();

  // Passed as customNavRow — replaces the default back|title|right row
  const userRow = (
    <View style={styles.userRow}>
      <View style={styles.userInfo}>
        <View style={styles.avatar} />
        <View>
          <Text style={{ color: colors.textMuted }}>Good Morning</Text>
          <Text style={styles.userName}>Hello, Coffee Lover 👋</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconCircle}>
        <Text style={{ color: 'white', fontSize: 24 }}>🔔</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenHeader customNavRow={userRow}>
      {/* Search — white bar variant for Home */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Text style={{ fontSize: 20 }}>🔍</Text>
          <TextInput
            placeholder="Search for coffee skincare..."
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.label}
            style={styles.catItem}
            onPress={() => navigation.navigate('Shop', { category: cat.label })}
          >
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
    </ScreenHeader>
  );
};

// Only HomeHeader-specific styles remain
const styles = StyleSheet.create({
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
    height: 50,
    alignItems: 'center',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  catItem: { marginRight: 15, alignItems: 'center' },
  circle: { borderRadius: 30, overflow: 'hidden', backgroundColor: '#EADBC8' },
  img: { width: '100%', height: '100%' },
  catLabel: { color: 'white', fontSize: 12, marginTop: 8, fontWeight: '500' },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
