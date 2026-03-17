import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/index';

import { HomeHeader } from '../Home/components/HomeHeader';
import { ExclusiveOffers } from '../Home/components/ExclusiveOffers';
import { TopPicks } from '../Home/components/TopPicks';
import { JoinClub } from '../Home/components/JoinClub';
import { useProducts } from '../../context/ProductContext';

import { categories, offers } from '../../constants/data';
import { getTopProducts } from '../../service/Top_Pick_Service';

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  const { topProducts, loading } = useProducts();

  if (loading) {
    return null; // // implement loading error state
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <HomeHeader
          categories={categories}
          navigation={navigation}
        />

        <View style={styles.content}>
          <ExclusiveOffers data={offers} />

          {/* Top Picks NOT filtered */}
          <TopPicks data={topProducts} navigation={navigation} />

          <JoinClub />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingVertical: 10 }
});