import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/index';
import { HomeHeader } from '../Home/components/HomeHeader';
import { ExclusiveOffers } from '../Home/components/ExclusiveOffers';
import { TopPicks } from '../Home/components/TopPicks';
import { JoinClub } from '../Home/components/JoinClub';
import { categories, offers, topPicks } from '../../constants/data';

export default function HomeScreen({navigation}) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader categories={categories} />
        <View style={styles.content}>
          <ExclusiveOffers data={offers} />
          <TopPicks data={topPicks} navigation={navigation} />
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