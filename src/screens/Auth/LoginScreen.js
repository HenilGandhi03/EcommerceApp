import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { CustomInput } from './components';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        await AsyncStorage.setItem('userToken', 'dummy_token_12345');
        await AsyncStorage.setItem('userEmail', email);

        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } catch (error) {
        Alert.alert('Error', 'Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo and Brand */}
          <View style={styles.logoContainer}>
            <View style={styles.innerRing}>
              <View style={styles.logoBox}>
                <Image
                  source={require('../../assets/images/brand_image_2.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Text style={styles.brandName}>MCAFFEINE</Text>
            <Text style={styles.tagline}>Premium Coffee Skincare</Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              iconName="mail"
              variant="login"
            />

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              showToggle={true}
              onToggleSecure={() => setShowPassword(!showPassword)}
              iconName="lock"
              variant="login"
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.loginButton,
                isLoading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1F17',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },

  innerRing: {
    width: 127.5, // 85% of outer ring
    height: 127.5,
    borderRadius: 63.75,
    borderWidth: 1.5,
    borderColor: '#D4AF37',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  logoBox: {
    width: 82.5, // 75% of inner ring
    height: 82.5,
    backgroundColor: '#D4AF37',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  logoImage: {
    width: '150%',
    height: '90%',
  },
  brandName: {
    fontSize: 36,
    fontFamily: 'serif',
    fontWeight: '600',
    letterSpacing: 1,
    color: '#D4AF37',
    marginTop: 20,
  },
  tagline: {
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: '300',
    color: '#D4AF37',
    marginTop: 5,
  },
  formContainer: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 32,
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#D4AF37',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#E8D5C4',
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B1F17',
    letterSpacing: 0.5,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#8B8B8B',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D4AF37',
  },
});

export default LoginScreen;
