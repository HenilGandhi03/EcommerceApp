import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert, Text } from 'react-native';
import { useTheme } from '../../../theme';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AddressCard } from './components/AddressCard';
import { AddNewAddressButton } from './components/AddNewAddressButton';
import { useAddress } from '../../../context/AddressContext';

// Mock data — replace with AsyncStorage / API call later
const MOCK_ADDRESSES = [
  {
    id: '1',
    type: 'HOME',
    name: 'Jane Doe',
    street: '123 Coffee Bean Lane, Apt 4B',
    city: 'Seattle, WA 98101',
    country: 'United States',
    phone: '+1 (555) 123-4567',
  },
  {
    id: '2',
    type: 'WORK',
    name: 'Jane Doe',
    street: '800 Espresso Avenue, Suite 200',
    city: 'Seattle, WA 98104',
    country: 'United States',
    phone: '+1 (555) 987-6543',
  },
];

export default function SavedAddressesScreen({ navigation }) {
  const { colors } = useTheme();
  const { addresses, deleteAddress } = useAddress();

  const handleDelete = id => {
    Alert.alert('Delete Address', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => deleteAddress(id), // ✅ GLOBAL DELETE
      },
    ]);
  };

  const handleEdit = address => {
    navigation.navigate('AddressForm', { address }); // ← passes existing data
  };

  const handleAddNew = () => {
    navigation.navigate('AddressForm'); // ← navigate to new address form
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader
        title="Saved Addresses"
        onBack={() => navigation.goBack()}
      />

      <FlatList
        data={addresses}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AddressCard
            address={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={{ fontSize: 40 }}>📍</Text>
            <Text style={[styles.emptyText, { color: colors.textMuted }]}>
              No saved addresses yet
            </Text>
          </View>
        }
      />

      <AddNewAddressButton onPress={handleAddNew} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { paddingTop: 20, paddingBottom: 100 },
  empty: { alignItems: 'center', marginTop: 80, gap: 12 },
  emptyText: { fontSize: 16 },
});
