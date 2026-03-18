import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const MapPreview = ({ verified = false, onPin }) => (
  <View style={styles.wrapper}>
    {/* Map placeholder — swap for react-native-maps MapView later */}
    <View style={styles.map}>
      <View style={styles.gridH} />
      <View style={[styles.gridH, { top: '50%' }]} />
      <View style={styles.gridV} />
      <View style={[styles.gridV, { left: '50%' }]} />
    </View>

    <View style={styles.badge}>
      <Text style={styles.pin}>📍</Text>
      <Text style={styles.badgeText}>
        {verified ? 'Location Verified' : 'Pin current location'}
      </Text>
    </View>

    {!verified && (
      <TouchableOpacity style={styles.pinBtn} onPress={onPin}>
        <Text style={styles.pinBtnText}>Use my current location</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  wrapper: { marginTop: 8, marginBottom: 24 },
  map: {
    height: 140,
    backgroundColor: '#E8E8E8',
    borderRadius: 18,
    overflow: 'hidden',
  },
  gridH: { position: 'absolute', left: 0, right: 0, top: '33%', height: 1, backgroundColor: '#D0D0D0' },
  gridV: { position: 'absolute', top: 0, bottom: 0, left: '33%', width: 1, backgroundColor: '#D0D0D0' },
  badge: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
    gap: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  pin: { fontSize: 14 },
  badgeText: { fontSize: 13, fontWeight: '600', color: '#333' },
  pinBtn: { marginTop: 10, alignItems: 'center' },
  pinBtnText: { color: '#C4622D', fontWeight: '600', fontSize: 14 },
});