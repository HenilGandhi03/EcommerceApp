import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* IMAGE SECTION */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>

          <View style={styles.topRight}>
            <View style={styles.iconCircle}>
              <Text>♡</Text>
            </View>
            <View style={styles.iconCircle}>
              <Text>🛍</Text>
            </View>
          </View>

          <View style={styles.ratingBadge}>
            <Text>⭐ {product.rating} ({product.reviews})</Text>
          </View>
        </View>

        {/* DETAILS */}
        <View style={styles.details}>
          <Text style={styles.category}>FACE CARE</Text>

          <View style={styles.titleRow}>
            <Text style={styles.title}>{product.title}</Text>
            <View>
              <Text style={styles.price}>{product.price}</Text>
              {product.oldPrice && (
                <Text style={styles.oldPrice}>{product.oldPrice}</Text>
              )}
            </View>
          </View>

          <Text style={styles.subtitle}>
            with Hyaluronic Acid & Pro-Vitamin B5
          </Text>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Deeply cleanse and awaken your skin with the rich aroma of pure
            Arabica coffee. This potent formula removes dirt, oil, and
            impurities while retaining moisture for a fresh, hydrated glow.
          </Text>

          <Text style={styles.sectionTitle}>Why you'll love it</Text>

          <View style={styles.featuresRow}>
            <Feature label="100% Vegan" />
            <Feature label="Paraben Free" />
            <Feature label="Cruelty Free" />
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM ADD TO CART */}
      <View style={styles.bottomBar}>
        <View style={styles.qtyBox}>
          <Text style={styles.qtyBtn}>−</Text>
          <Text style={styles.qty}>1</Text>
          <Text style={styles.qtyBtn}>+</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>🛍 Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Feature = ({ label }) => (
  <View style={styles.featureBox}>
    <Text style={{ fontSize: 18 }}>✔</Text>
    <Text style={{ marginTop: 6, fontSize: 12 }}>{label}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F2EE",
  },

  imageContainer: {
    height: 420,
    backgroundColor: "#EADBC8",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  backBtn: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 10,
    borderRadius: 20,
  },

  topRight: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
  },

  iconCircle: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },

  ratingBadge: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },

  details: {
    padding: 20,
  },

  category: {
    color: "#D97706",
    fontWeight: "bold",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    flex: 1,
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  subtitle: {
    color: "#666",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  description: {
    color: "#555",
    lineHeight: 20,
  },

  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  featureBox: {
    width: "30%",
    backgroundColor: "#EFE6DD",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },

  bottomBar: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },

  qtyBtn: {
    fontSize: 20,
    marginHorizontal: 10,
  },

  qty: {
    fontSize: 16,
    fontWeight: "bold",
  },

  addBtn: {
    backgroundColor: "#4B2E1F",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },

  addText: {
    color: "white",
    fontWeight: "bold",
  },
});