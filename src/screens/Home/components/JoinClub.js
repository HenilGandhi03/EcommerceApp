import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/index';
import { Typography } from '../../../theme/typography';

export const JoinClub = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: '#EDE0D0' }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          {Typography.strings.clubTitle}
        </Text>
        <Text style={styles.desc}>{Typography.strings.clubDesc}</Text>
        <TouchableOpacity>
          <Text style={[styles.link, { color: colors.accent }]}>
            {Typography.strings.learnMore}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.iconBox, { backgroundColor: colors.brandGold }]}>
        <Text style={{ fontSize: 24 }}>🏷</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: { flex: 1 },
  title: { fontWeight: 'bold', fontSize: 17 },
  desc: { fontSize: 12, color: '#666', marginVertical: 8, lineHeight: 18 },
  link: { fontWeight: 'bold', textDecorationLine: 'underline' },
  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
