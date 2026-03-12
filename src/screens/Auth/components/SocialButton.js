import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({ iconName, onPress, style }) => (
  <TouchableOpacity style={[styles.socialButton, style]} onPress={onPress}>
    {iconName === 'google' ? (
      <AntDesignIcon name="google" size={20} color="#D4AF37" />
    ) : iconName === 'apple' ? (
      <AntDesignIcon name="apple1" size={20} color="#D4AF37" />
    ) : iconName === 'facebook' ? (
      <FontAwesomeIcon name="facebook" size={20} color="#D4AF37" />
    ) : (
      <AntDesignIcon name={iconName} size={20} color="#D4AF37" />
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
});

export default SocialButton;
