import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AddNewAddressButton = ({ onPress }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: bottom + 16 }]}>
      <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.85}>
        <Text style={styles.plus}>+</Text>
        <Text style={styles.label}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    backgroundColor: 'transparent',
  },
  btn: {
    backgroundColor: '#2C1810',
    borderRadius: 50,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  plus: { color: 'white', fontSize: 22, fontWeight: '300' },
  label: { color: 'white', fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
});