import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useTheme } from '../theme'; // Updated to use the modular hook
import { Typography } from '../theme/typography'; // For central text strings

export default function SplashScreen({ navigation }) {
  const { colors, sizes } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        {/* LOGO SECTION WITH RINGS */}
        <View style={styles.logoContainer}>
          <View style={[styles.outerRing, { borderColor: colors.ringBorder }]}>
            <View style={[styles.innerRing, { borderColor: colors.brandGold }]}>
              <View
                style={[styles.logoBox, { backgroundColor: colors.brandGold }]}
              >
                {/* Image source now pulled from central theme assets */}
                <Image
                  source={require('../assets/images/brand_image_2.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* BRAND TEXT SECTION - Using central typography strings */}
        <Text style={[styles.brandText, { color: colors.brandGold }]}>
          {Typography.strings.brandName}
        </Text>

        {/* TAGLINE SECTION */}
        <View style={styles.taglineWrapper}>
          <View style={[styles.line, { backgroundColor: colors.muted }]} />
          <Text style={[styles.tagline, { color: colors.brandGold }]}>
            {Typography.strings.tagline}
          </Text>
          <View style={[styles.line, { backgroundColor: colors.muted }]} />
        </View>
      </Animated.View>

      {/* FOOTER SECTION */}
      <View style={styles.footer}>
        <View
          style={[
            styles.loadingBar,
            { backgroundColor: colors.ringBorder, width: sizes.width * 0.3 },
          ]}
        />
        <Text style={[styles.footerText, { color: colors.muted }]}>
          {Typography.strings.footer}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: { alignItems: 'center', width: '100%' },
  logoContainer: { marginBottom: 40 },
  outerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  logoBox: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
  },
  logoImage: { width: '150%', height: '90%' },
  brandText: {
    fontSize: 48,
    fontFamily: 'serif',
    fontWeight: '600',
    letterSpacing: 1,
  },
  taglineWrapper: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  line: { height: 1, width: 40, marginHorizontal: 15 },
  tagline: { fontSize: 12, letterSpacing: 4, fontWeight: '300' },
  footer: { position: 'absolute', bottom: 50, alignItems: 'center' },
  loadingBar: { height: 1, marginBottom: 10 },
  footerText: { fontSize: 10, letterSpacing: 2 },
});
