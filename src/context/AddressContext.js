import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);


  useEffect(() => {
    AsyncStorage.getItem('addresses').then(data => {
      if (data) setAddresses(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (newAddress) => {
    setAddresses(prev => [
      { ...newAddress, id: Date.now().toString() },
      ...prev,
    ]);
  };

  const updateAddress = (updated) => {
    setAddresses(prev =>
      prev.map(a => (a.id === updated.id ? updated : a))
    );
  };

  const deleteAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);