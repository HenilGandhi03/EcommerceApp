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

  categoryItem: { alignItems: 'center' },

  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5D5C5',
    marginBottom: 8,
  },

  categoryText: { fontSize: 13 },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },

  productImage: {
    height: 120,
    backgroundColor: '#F1E4D8',
    borderRadius: 15,
    marginBottom: 10,
  },

  productTitle: {
    fontWeight: 'bold',
  },

  productSubtitle: {
    fontSize: 12,
    color: '#777',
    marginVertical: 5,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    color: '#D97706',
    fontWeight: 'bold',
  },

  addBtn: {
    backgroundColor: '#D97706',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clubCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#EADBC8',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  bottomNav: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  nav: { color: '#777' },

  navActive: { color: '#D97706', fontWeight: 'bold' },

  centerBtn: {
    backgroundColor: '#D97706',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
});