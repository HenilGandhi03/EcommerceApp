import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const FormActions = ({ isEdit, onSave, onCancel }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: bottom + 16 }]}>
      <TouchableOpacity style={styles.saveBtn} onPress={onSave} activeOpacity={0.85}>
        <Text style={styles.saveIcon}>💾</Text>
        <Text style={styles.saveLabel}>
          {isEdit ? 'Update Address' : 'Save Address'}
        </Text>
      </TouchableOpacity>

      {!isEdit && (
        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel} activeOpacity={0.7}>
          <Text style={styles.cancelLabel}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { gap: 12, paddingTop: 8 },
  saveBtn: {
    backgroundColor: '#C4622D',
    borderRadius: 50,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  saveIcon: { fontSize: 18 },
  saveLabel: { color: 'white', fontSize: 16, fontWeight: '700' },
  cancelBtn: {
    backgroundColor: '#F5EDE6',
    borderRadius: 50,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelLabel: { color: '#C4622D', fontSize: 15, fontWeight: '600' },
});