import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../theme/index';
import { Typography } from '../../../theme/typography';

// src/screens/Home/components/TopPicks.js
export const TopPicks = ({ data, navigation }) => { // Destructure navigation
  const { colors, sizes } = useTheme();
  const [favorites, setFavorites] = useState({});

  const toggleFav = id => setFavorites(p => ({ ...p, [id]: !p[id] }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {Typography.strings.topPicksTitle}
        </Text>
        {/* Navigate to the Shop tab */}
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Shop' })}>
          <Text style={{ color: colors.textMuted }}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: sizes.padding, paddingBottom: sizes.padding }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            // Navigate to Product Details and pass the item data
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
            activeOpacity={0.9}
            style={[
              styles.card,
              {
                width: sizes.productCardWidth,
                backgroundColor: colors.surface,
              },
            ]}
          >
            <View style={[styles.imgContainer, { height: sizes.productImgHeight }]}>
              <Image source={{ uri: item.img }} style={styles.img} />
            </View>
            <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
            <Text style={styles.sub}>{item.sub}</Text>
            <View style={styles.footer}>
              <Text style={[styles.price, { color: colors.text }]}>{item.price}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => toggleFav(item.id)}>
                  <Text style={{ fontSize: 18 }}>{favorites[item.id] ? '❤️' : '🤍'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  card: {
    borderRadius: 25,
    padding: 12,
    marginRight: 15,
    elevation: 3,
    shadowOpacity: 0.1,
  },
  imgContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#F3E9DD',
  },
  img: { width: '100%', height: '100%' },
  name: { fontWeight: 'bold', fontSize: 14, marginTop: 10 },
  sub: { fontSize: 10, color: '#888', marginVertical: 4 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: { fontWeight: 'bold' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  addBtn: {
    backgroundColor: '#000',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: { color: 'white', fontSize: 18, lineHeight: 22 },
});
