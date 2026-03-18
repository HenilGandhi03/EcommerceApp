import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal,
  FlatList, StyleSheet, Platform, StatusBar,
} from 'react-native';
import { useTheme } from '../../../../../theme';

const STATES = [
  'Andhra Pradesh', 'Delhi', 'Goa', 'Gujarat', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Punjab',
  'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh',
  'West Bengal',
];

export const StateDropdown = ({ value, onChange }) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: colors.text }]}>State</Text>

      {/* Trigger button */}
      <TouchableOpacity
        style={[styles.trigger, { backgroundColor: colors.surface }]}
        onPress={() => setOpen(true)}
        activeOpacity={0.8}
      >
        <Text style={[styles.value, { color: value ? colors.text : colors.textMuted }]}>
          {value || 'Select State'}
        </Text>
        <Text style={{ color: colors.textMuted, fontSize: 16 }}>⌄</Text>
      </TouchableOpacity>

      {/* Bottom sheet modal */}
      <Modal
        visible={open}
        transparent
        animationType="slide"          // slide avoids the fade-render race on Android
        statusBarTranslucent           // ← required on Android to cover status bar
        onRequestClose={() => setOpen(false)}
      >
        {/* 
          Split into two Views instead of a single TouchableOpacity overlay.
          A TouchableOpacity overlay captures ALL touches including those on
          the sheet below it — using a plain View + separate close tap area fixes that.
        */}
        <View style={styles.overlay}>
          {/* Tap-to-dismiss area above the sheet */}
          <TouchableOpacity
            style={styles.dismissArea}
            activeOpacity={1}
            onPress={() => setOpen(false)}
          />

          {/* Sheet */}
          <View style={[styles.sheet, { backgroundColor: colors.surface }]}>
            <View style={styles.handle} />
            <Text style={[styles.sheetTitle, { color: colors.text }]}>Select State</Text>

            <FlatList
              data={STATES}
              keyExtractor={item => item}
              style={styles.list}          // ← explicit height so it renders on Android
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item === value && { backgroundColor: '#F5EDE6' },
                  ]}
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.optionText,
                    { color: item === value ? '#C4622D' : colors.text },
                  ]}>
                    {item}
                  </Text>
                  {item === value && (
                    <Text style={{ color: '#C4622D' }}>✓</Text>
                  )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => (
                <View style={[styles.sep, { backgroundColor: colors.background }]} />
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  value: { fontSize: 15 },

  // Modal layout
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },
  dismissArea: {
    flex: 1,   // fills everything above the sheet — tap here to close
  },
  sheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'android' ? 16 : 32,
  },
  handle: {
    width: 36, height: 4, borderRadius: 2,
    backgroundColor: '#CCC',
    alignSelf: 'center',
    marginBottom: 12,
  },
  sheetTitle: {
    fontSize: 16, fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  list: {
    maxHeight: 320,   // ← critical: FlatList needs a bounded height inside Modal
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  optionText: { fontSize: 15 },
  sep: { height: 1, marginHorizontal: 20 },
});