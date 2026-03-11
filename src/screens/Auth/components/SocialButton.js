import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SocialButton = ({ iconName, onPress, style }) => (
  <TouchableOpacity style={[styles.socialButton, style]} onPress={onPress}>
    {iconName === 'google' ? (
      <View style={styles.googleIcon}>
        <Icon name="search" size={16} color="#2B1F17" />
      </View>
    ) : iconName === 'apple' ? (
      <Icon name="smartphone" size={20} color="#D4AF37" />
    ) : (
      <Icon name={iconName} size={20} color="#D4AF37" />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D4AF37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D4AF37',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SocialButton;
