import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckoutScreen({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedPayment, setSelectedPayment] = useState("card");

  const subtotal = 24;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
          <View style={{ width: 20 }} />
        </View>

        {/* STEP INDICATOR */}
        <View style={styles.steps}>
          <Step label="Address" active />
          <Step label="Payment" active />
          <Step label="Review" />
        </View>

        {/* DELIVERY ADDRESS */}
        <SectionHeader title="Delivery Address" />

        <SelectableCard
          selected={selectedAddress === "home"}
          onPress={() => setSelectedAddress("home")}
          title="Home"
          subtitle="123 Coffee Bean Lane, CA 90210"
        />

        <SelectableCard
          selected={selectedAddress === "office"}
          onPress={() => setSelectedAddress("office")}
          title="Office"
          subtitle="456 Espresso Ave, NY 10001"
        />

        <TouchableOpacity style={styles.addNew}>
          <Text style={{ color: "#8C5A2B" }}>+ Add New Address</Text>
        </TouchableOpacity>

        {/* PAYMENT METHOD */}
        <SectionHeader title="Payment Method" />

        <SelectableCard
          selected={selectedPayment === "card"}
          onPress={() => setSelectedPayment("card")}
          title="Mastercard **** 4242"
          subtitle="Expires 09/25"
        />

        <SelectableCard
          selected={selectedPayment === "upi"}
          onPress={() => setSelectedPayment("upi")}
          title="UPI / Wallets"
          subtitle="GooglePay, PhonePe, Paytm"
        />

        {/* ORDER SUMMARY */}
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.row}>
            <Text>Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text>Delivery</Text>
            <Text style={{ color: "green" }}>Free</Text>
          </View>

          <View style={styles.row}>
            <Text>Tax</Text>
            <Text>${tax.toFixed(2)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM PAY BAR */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={{ color: "#777" }}>Total to Pay</Text>
          <Text style={styles.payAmount}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payText}>Pay Now →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ---------- Components ---------- */

const Step = ({ label, active }) => (
  <View style={styles.stepItem}>
    <View
      style={[
        styles.stepCircle,
        active && { backgroundColor: "#D97706" },
      ]}
    />
    <Text style={{ color: active ? "#D97706" : "#999" }}>
      {label}
    </Text>
  </View>
);

const SectionHeader = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const SelectableCard = ({ selected, onPress, title, subtitle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.card,
      selected && { borderColor: "#D97706", borderWidth: 2 },
    ]}
  >
    <View>
      <Text style={{ fontWeight: "600" }}>{title}</Text>
      <Text style={{ color: "#777", marginTop: 4 }}>
        {subtitle}
      </Text>
    </View>

    <View
      style={[
        styles.radio,
        selected && { backgroundColor: "#D97706" },
      ]}
    />
  </TouchableOpacity>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F2EE" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  back: { fontSize: 22 },
  title: { fontSize: 20, fontWeight: "bold" },

  steps: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  stepItem: { alignItems: "center" },

  stepCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#DDD",
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addNew: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#CCC",
    alignItems: "center",
  },

  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#D97706",
  },

  summary: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },

  summaryTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 10,
  },

  totalText: { fontWeight: "bold" },

  totalAmount: {
    fontWeight: "bold",
    color: "#D97706",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  payAmount: {
    fontWeight: "bold",
    fontSize: 18,
  },

  payBtn: {
    backgroundColor: "#D97706",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },

  payText: {
    color: "white",
    fontWeight: "bold",
  },
});