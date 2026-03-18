import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { useTheme } from '../../../../theme';
import { ScreenHeader } from '../../../../components/ScreenHeader';
import { FormField } from './components/FormField';
import { PhoneField } from './components/PhoneField';
import { InlineFields } from './components/InlineFields';
import { StateDropdown } from './components/StateDropdown';
import { AddressTypeSelector } from './components/AddressTypeSelector';
import { DefaultAddressToggle } from './components/DefaultAddressToggle';
import { MapPreview } from './components/MapPreview';
import { FormActions } from './components/FormActions';
import { InteractionManager } from 'react-native';
import { useAddress } from '../../../../context/AddressContext';

export default function AddressFormScreen({ route, navigation }) {
  const { colors } = useTheme();
  const { addAddress, updateAddress } = useAddress();
  const { deleteAddress } = useAddress();
  // If address is passed via route → Edit mode, otherwise → Add mode
  const existingAddress = route?.params?.address ?? null;
  const isEdit = !!existingAddress;
  const safeAlert = (title, message, buttons) => {
    InteractionManager.runAfterInteractions(() => {
      Alert.alert(title, message, buttons);
    });
  };

  const [form, setForm] = useState({
    name: existingAddress?.name ?? '',
    phone: existingAddress?.phone ?? '',
    house: existingAddress?.house ?? '',
    apartment: existingAddress?.apartment ?? '',
    street: existingAddress?.street ?? '',
    landmark: existingAddress?.landmark ?? '',
    pincode: existingAddress?.pincode ?? '',
    city: existingAddress?.city ?? '',
    state: existingAddress?.state ?? '',
    type: existingAddress?.type ?? 'HOME',
    isDefault: existingAddress?.isDefault ?? false,
  });

  const set = key => val => setForm(prev => ({ ...prev, [key]: val }));

  const handleSave = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.street.trim()) {
      Alert.alert('Missing Fields', 'Please fill in Name, Phone, and Street.');
      return;
    }

    if (isEdit) {
      updateAddress({ ...existingAddress, ...form });
    } else {
      addAddress(form);
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScreenHeader
        title={isEdit ? 'Edit Address' : 'Add New Address'}
        onBack={() => navigation.goBack()}
        // Delete button only in Edit mode
        rightIcon={isEdit ? '🗑️' : undefined}
        onRightPress={
          isEdit
            ? () =>
                Alert.alert('Delete Address', 'Are you sure?', [
                  { text: 'Cancel', style: 'cancel' },
                  {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                      deleteAddress(existingAddress.id);
                      navigation.goBack();
                    },
                  },
                ])
            : undefined
        }
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormField
          label="Full Name"
          value={form.name}
          onChangeText={set('name')}
          placeholder="Enter your full name"
        />

        <PhoneField
          label={isEdit ? 'Mobile Number' : 'Phone Number'}
          value={form.phone}
          onChangeText={set('phone')}
        />

        {/* Add mode has House + Apartment side by side */}
        {!isEdit && (
          <InlineFields
            left={{
              label: 'House/Flat No',
              value: form.house,
              onChangeText: set('house'),
              placeholder: 'e.g. 101',
            }}
            right={{
              label: 'Apartment Name',
              value: form.apartment,
              onChangeText: set('apartment'),
              placeholder: 'e.g. Skyline',
            }}
          />
        )}

        <FormField
          label="Street / Area"
          value={form.street}
          onChangeText={set('street')}
          placeholder="Enter street or locality name"
        />

        {!isEdit && (
          <FormField
            label="Landmark"
            value={form.landmark}
            onChangeText={set('landmark')}
            placeholder="e.g. Near Central Park"
            optional
          />
        )}

        <InlineFields
          left={{
            label: 'Pincode',
            value: form.pincode,
            onChangeText: set('pincode'),
            placeholder: '400001',
            keyboardType: 'numeric',
          }}
          right={{
            label: 'City',
            value: form.city,
            onChangeText: set('city'),
            placeholder: 'Mumbai',
          }}
        />

        <StateDropdown value={form.state} onChange={set('state')} />

        {/* Type selector + default toggle only in Edit mode */}
        {isEdit && (
          <>
            <AddressTypeSelector selected={form.type} onSelect={set('type')} />
            <DefaultAddressToggle
              value={form.isDefault}
              onToggle={() => set('isDefault')(!form.isDefault)}
            />
          </>
        )}

        <MapPreview verified={isEdit} />

        <FormActions
          isEdit={isEdit}
          onSave={handleSave}
          onCancel={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
});
