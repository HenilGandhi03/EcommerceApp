import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../theme';

import { ProductHeader } from './components/ProductHeader';
import { ProductFilters } from './components/ProductFilters';
import { ProductGrid } from './components/ProductGrid';

import { getAllProducts } from '../../service/All_Product_Service';
import { useProducts } from '../../context/ProductContext';

export default function ProductScreen({ navigation, route }) {
  const { colors } = useTheme();

  const category = route?.params?.category;

  const [search, setSearch] = useState('');
  const { allProducts, loading } = useProducts();
  const products = allProducts;
  if (loading) return null;// implement loading error state

  const filteredProducts = category
    ? products.filter((p) =>
        p.tags?.toLowerCase().includes(category.toLowerCase())
      )
    : products;

  const finalProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <ProductHeader
        title={category || "All Products"}
        navigation={navigation}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <ProductFilters />

        <ProductGrid products={finalProducts} navigation={navigation} />

        <View style={{ height: 100 }} />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 20 },
});