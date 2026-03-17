// src/context/ProductContext.js

import React, { createContext, useState, useContext } from 'react';
import { getTopProducts } from '../service/Top_Pick_Service';
import { getAllProducts } from '../service/All_Product_Service';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [topProducts, setTopProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInitialData = async () => {
    if (topProducts.length && allProducts.length) {
      setLoading(false);
      return;
    }

    try {
      const [top, all] = await Promise.all([
        getTopProducts(),
        getAllProducts(),
      ]);

      setTopProducts(top);
      setAllProducts(all);
    } catch (err) {
      console.log('Error preloading data', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        topProducts,
        allProducts,
        loading,
        loadInitialData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
