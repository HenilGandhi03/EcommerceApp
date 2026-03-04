import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/index';

export const ExclusiveOffers = ({ data }) => {
  const { colors, sizes } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Exclusive offers for you</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={sizes.offerCardWidth + 15}
        decelerationRate="fast"
        contentContainerStyle={{ paddingLeft: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: sizes.offerCardWidth }]}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.desc}</Text>
              <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Shop Now</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginBottom: 15 },
  card: { height: 180, borderRadius: 25, overflow: 'hidden', marginRight: 15 },
  img: { width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)', padding: 20, justifyContent: 'center' },
  cardTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  cardSub: { color: 'white', fontSize: 11, marginVertical: 8, width: '70%' },
  btn: { backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, alignSelf: 'flex-start' },
  btnText: { fontWeight: 'bold', fontSize: 12 }
});