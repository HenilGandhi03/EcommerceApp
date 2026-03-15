import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../theme';

import { ProductHeader } from './components/ProductHeader';
import { ProductFilters } from './components/ProductFilters';
import { ProductGrid } from './components/ProductGrid';

import { getAllProducts } from '../../service/All_Product_Service';

export default function ProductScreen({ navigation }) {
  const { colors } = useTheme();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.log('Product loading error', error);
    }
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ProductHeader
        title="All Products"
        navigation={navigation}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <ProductFilters search={search} setSearch={setSearch} />

        <ProductGrid products={filtered} navigation={navigation} />

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 20 },
});
