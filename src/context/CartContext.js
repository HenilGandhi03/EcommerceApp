import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ LOAD cart from storage on app start
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (e) {
        console.log('Error loading cart', e);
      }
    };

    loadCart();
  }, []);

  // ✅ SAVE cart whenever it changes
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
      } catch (e) {
        console.log('Error saving cart', e);
      }
    };

    saveCart();
  }, [cart]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });
  };

  // ➕➖ UPDATE QTY
const updateQty = (id, delta) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0) // 🔥 REMOVE if 0
  );
};

  // ❌ REMOVE ITEM
  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);