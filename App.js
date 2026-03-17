import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import { LoginScreen, SignupScreen } from './src/screens/Auth';
import MainTabs from './src/navigation/MainTabs';
import ProductDetailsScreen from './src/screens/Product/ProductDetailsScreen';
import CheckoutScreen from './src/screens/Cart/CheckoutScreen';
import { CartProvider } from './src/context/CartContext';
import { ProductProvider } from './src/context/ProductContext';
import { FavoriteProvider } from './src/context/FavoriteContext';
import CartScreen from './src/screens/Cart/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="MainTabs" component={MainTabs} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
              />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoriteProvider>
      </ProductProvider>
    </CartProvider>
  );
}
