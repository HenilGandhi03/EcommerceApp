import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Theme = {
  colors: {
    background: '#2C1810',
    brandGold: '#D4AF37',
    taglineGold: '#F5DEB3',
    muted: '#8B7355',
    ringBorder: 'rgba(212, 175, 55, 0.3)',
    logoBoxBg: '#D4AF37',
  },
};

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    {
      label: 'Face',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&q=80',
    },
    {
      label: 'Body',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&q=80',
    },
    {
      label: 'Hair',
      img: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=150&q=80',
    },
    {
      label: 'Gifts',
      img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=150&q=80',
    },
    {
      label: 'Sets',
      img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&q=80',
    },
  ];

  const offers = [
    {
      id: '1',
      title: 'Wake Up\nYour Skin',
      desc: 'Raw coffee beans infused with berries.',
      img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    },
    {
      id: '2',
      title: 'Choco Glow',
      desc: 'Pure cocoa butter for deep hydration.',
      img: 'https://images.unsplash.com/photo-1556229167-73191319bc3b?w=600&q=80',
    },
  ];

  const topPicks = [
    {
      id: '1',
      name: 'Coffee Face Wash',
      sub: 'Deep Cleansing',
      price: '$12.99',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
    },
    {
      id: '2',
      name: 'Hydrating Serum',
      sub: 'With Hyaluronic Acid',
      price: '$24.00',
      img: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=300&q=80',
    },
    {
      id: '3',
      name: 'Body Scrub',
      sub: 'Exfoliating',
      price: '$15.50',
      img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&q=80',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {/* SECTION 1: DARK CURVED HEADER */}
        <View style={styles.darkHeader}>
          {/* User row */}
          <View style={styles.userRow}>
            <View style={styles.userInfo}>
              <View style={styles.avatarPlaceholder} />
              <View>
                <Text style={styles.greetingText}>Good Morning</Text>
                <Text style={styles.userName}>Hello, Coffee Lover 👋</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconCircle}>
              <Text style={styles.whiteIcon}>🔔</Text>
            </TouchableOpacity>
          </View>

          {/* Search Row */}
          <View style={styles.searchRow}>
            <TouchableOpacity style={styles.iconCircle}>
              <Text style={styles.whiteIcon}>⊞</Text>
            </TouchableOpacity>
            <View style={styles.searchBar}>
              <Text style={{ fontSize: 16 }}>🔍</Text>
              <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor="#999"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity style={styles.iconCircle}>
              {/* Filter/sliders icon */}
              <View style={styles.filterIcon}>
                <View style={[styles.filterLine, { width: 16 }]} />
                <View style={[styles.filterLine, { width: 12, marginTop: 3 }]} />
                <View style={[styles.filterLine, { width: 8, marginTop: 3 }]} />
              </View>
            </TouchableOpacity>
          </View>

          {/* CIRCULAR CATEGORIES with images */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.catScroll}
          >
            {categories.map(cat => (
              <TouchableOpacity key={cat.label} style={styles.catItem}>
                <View style={styles.catCircleWrapper}>
                  <Image source={{ uri: cat.img }} style={styles.catCircleImg} />
                </View>
                <Text style={styles.catLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* SECTION 2: WHITE CONTENT AREA */}
        <View style={styles.contentArea}>

          {/* EXCLUSIVE OFFERS */}
          <Text style={styles.sectionTitle}>Exclusive offers for you</Text>
          <FlatList
            data={offers}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.heroCard}>
                <Image source={{ uri: item.img }} style={styles.heroImage} />
                <View style={styles.heroOverlay}>
                  <Text style={styles.heroTitle}>{item.title}</Text>
                  <Text style={styles.heroSub}>{item.desc}</Text>
                  <TouchableOpacity style={styles.shopButton}>
                    <Text style={styles.shopButtonText}>Shop Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {/* TOP PICKS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top pick for you</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={topPicks}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.img }} style={styles.productImage} />
                </View>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardSub}>{item.sub}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <View style={styles.actionBtns}>
                    <TouchableOpacity
                      style={styles.heartBtn}
                      onPress={() => toggleFavorite(item.id)}
                    >
                      <Text style={{ fontSize: 14 }}>
                        {favorites[item.id] ? '❤️' : '🤍'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn}>
                      <Text style={{ color: 'white', fontSize: 18, lineHeight: 20 }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          {/* JOIN CLUB */}
          <View style={styles.clubCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.clubTitle}>Join the Bean Club</Text>
              <Text style={styles.clubDesc}>
                Earn points on every order and get exclusive rewards.
              </Text>
              <Text style={styles.learnMore}>Learn More</Text>
            </View>
            <View style={[styles.clubIcon, { backgroundColor: Theme.colors.brandGold }]}>
              <Text style={{ fontSize: 20 }}>🏷</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F0EB' },

  /* ── DARK HEADER ── */
  darkHeader: {
    backgroundColor: '#2C1810',
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EADBC8',
  },
  greetingText: { color: '#8C8C8C', fontSize: 12 },
  userName: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteIcon: { color: 'white', fontSize: 16 },

  /* Filter icon lines */
  filterIcon: { alignItems: 'flex-end', justifyContent: 'center' },
  filterLine: {
    height: 2,
    backgroundColor: 'white',
    borderRadius: 2,
  },

  /* Search */
  searchRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 46,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#333' },

  /* Categories */
  catScroll: { paddingLeft: 16, marginTop: 24, paddingBottom: 4 },
  catItem: { alignItems: 'center', marginRight: 18 },
  catCircleWrapper: {
    width: 60,
    height: 60,
    borderRadius: 34,
    overflow: 'hidden',
    backgroundColor: '#EADBC8',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  catCircleImg: { width: '100%', height: '100%' },
  catLabel: { color: 'white', fontSize: 12, fontWeight: '500' },

  /* ── WHITE CONTENT AREA ── */
  contentArea: {
    flex: 1,
    backgroundColor: '#F4F0EB',
    paddingTop: 28,
    paddingHorizontal: 20,
    marginTop: 0,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#1A1412' },

  /* Hero offer card */
  heroCard: {
    width: width - 40,
    height: 200,
    borderRadius: 22,
    overflow: 'hidden',
    marginRight: 20,
    marginBottom: 25,
  },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 22,
    justifyContent: 'center',
  },
  heroTitle: { color: 'white', fontSize: 26, fontWeight: 'bold', lineHeight: 32 },
  heroSub: { color: 'rgba(255,255,255,0.85)', fontSize: 12, marginVertical: 8, width: '60%' },
  shopButton: {
    backgroundColor: 'white',
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shopButtonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#C4622D',  /* Orange-brown to match image */
  },

  /* Section header */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 4,
  },
  viewAll: { color: '#999', fontSize: 13 },

  /* Product card */
  card: {
    width: 162,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    marginRight: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F3E9DD',
    borderRadius: 14,
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  cardName: { fontWeight: 'bold', fontSize: 14, color: '#1A1412' },
  cardSub: { fontSize: 11, color: '#999', marginVertical: 3 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  cardPrice: { fontWeight: 'bold', fontSize: 15, color: '#1A1412' },
  actionBtns: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  heartBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F4F0EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#1A1412',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Club card */
  clubCard: {
    backgroundColor: '#EDE0D0',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
  clubTitle: { fontWeight: 'bold', fontSize: 16, color: '#1A1412' },
  clubDesc: { fontSize: 12, color: '#666', marginVertical: 5, lineHeight: 17 },
  learnMore: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#C4622D',
    textDecorationLine: 'underline',
  },
  clubIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
