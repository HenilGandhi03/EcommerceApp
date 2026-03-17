import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../theme';
import { useFavorites } from '../../context/FavoriteContext';

import { FavouritesHeader } from './components/FavouritesHeader';
import { FavouritesGrid } from './components/FavouritesGrid';
import { FavouritesEmpty } from './components/FavouritesEmpty';

export default function FavouriteScreen({ navigation }) {
  const { colors } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();

  const [search, setSearch] = useState('');

  const filtered = favorites.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRemove = (item) => {
    toggleFavorite(item); // removes
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <FavouritesHeader
        navigation={navigation}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.length === 0 ? (
          <FavouritesEmpty navigation={navigation} />
        ) : (
          <FavouritesGrid
            items={filtered}
            onRemove={handleRemove}
            navigation={navigation}
          />
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});