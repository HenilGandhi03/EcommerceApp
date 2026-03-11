import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onToggleSecure,
  showToggle,
  keyboardType = 'default',
  autoCapitalize = 'none',
  iconName,
  variant = 'signup', // 'login' or 'signup'
  ...props
}) => (
  <View
    style={[
      styles.inputContainer,
      variant === 'login' && styles.inputContainerLogin,
    ]}
  >
    {iconName && (
      <Icon
        name={iconName}
        size={18}
        color="#8B8B8B"
        style={styles.inputIcon}
      />
    )}
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#8B8B8B"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      {...props}
    />
    {showToggle && (
      <TouchableOpacity onPress={onToggleSecure} style={styles.eyeIcon}>
        <Icon
          name={secureTextEntry ? 'eye-off' : 'eye'}
          size={18}
          color="#8B8B8B"
        />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputContainerLogin: {
    backgroundColor: '#3D2F23',
    borderColor: '#4A3428',
    borderRadius: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  eyeIcon: {
    padding: 4,
  },
});

export default CustomInput;
