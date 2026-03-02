import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryItem from '../components/CategoryItem';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.menu}>☰</Text>
          <Text style={styles.brand}>mCaffeine</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View style={styles.cartWrapper}>
              <Text style={styles.cart}>🛍</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* SEARCH BAR */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('Shop')}
        >
          <Text style={{ color: '#8C8C8C' }}>
            🔍 Search for coffee skincare...
          </Text>
        </TouchableOpacity>

        {/* HERO CARD */}
        <View style={styles.heroCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.newArrival}>NEW ARRIVAL</Text>
            <Text style={styles.heroTitle}>
              Wake Up{'\n'}Your Skin
            </Text>
            <Text style={styles.heroDesc}>
              Experience the exfoliating power of raw coffee beans infused with berries.
            </Text>

            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => navigation.navigate('Shop')}
            >
              <Text style={styles.heroButtonText}>Shop Body Scrub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          <CategoryItem label="Face" />
          <CategoryItem label="Body" />
          <CategoryItem label="Hair" />
          <CategoryItem label="Gift Sets" />
        </View>

        {/* BESTSELLERS */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Bestsellers
        </Text>

        <View style={styles.productGrid}>
          <ProductCard
            title="Coffee Face Wash"
            subtitle="Deep Cleansing & Oil Control"
            price="$12.99"
          />
          <ProductCard
            title="Choco Body Butter"
            subtitle="Intense Moisturization"
            price="$18.50"
          />
          <ProductCard
            title="Hydrating Face Serum"
            subtitle="With Hyaluronic Acid"
            price="$24.00"
          />
          <ProductCard
            title="Coffee Scalp Scrub"
            subtitle="Dandruff Control"
            price="$15.50"
          />
        </View>

        {/* JOIN CLUB */}
        <View style={styles.clubCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.clubTitle}>Join the Bean Club</Text>
            <Text style={styles.clubDesc}>
              Earn points on every order and get exclusive rewards.
            </Text>
            <Text style={styles.learnMore}>Learn More</Text>
          </View>

          <View style={styles.clubIcon}>
            <Text style={{ fontSize: 24 }}>🏷</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EE',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  brand: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D97706',
  },

  menu: { fontSize: 20 },

  cartWrapper: { position: 'relative' },

  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: '#D97706',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: { color: 'white', fontSize: 10 },

  searchBar: {
    margin: 20,
    backgroundColor: '#ECE7E1',
    padding: 15,
    borderRadius: 25,
  },

  heroCard: {
    marginHorizontal: 20,
    borderRadius: 30,
    overflow: 'hidden',
    height: 300,
    marginBottom: 20,
  },

  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },

  heroContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  newArrival: {
    backgroundColor: '#F59E0B',
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
    fontSize: 12,
  },

  heroTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  heroDesc: {
    color: 'white',
    marginVertical: 10,
  },

  heroButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },

  heroButtonText: {
    color: '#D97706',
    fontWeight: 'bold',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  viewAll: {
    color: '#D97706',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  clubCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#EADBC8',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  clubTitle: { fontSize: 18, fontWeight: 'bold' },

  clubDesc: { marginVertical: 8, color: '#6B6B6B' },

  learnMore: { color: '#D97706', fontWeight: 'bold' },

  clubIcon: {
    backgroundColor: '#D97706',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});