// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// export default function SplashScreen({ navigation, theme }) {
//   const activeTheme = theme || {
//     colors: {
//       background: '#2C1810',
//       brand: '#F5DEB3',
//       tagline: '#D4604D',
//     },
//     text: {
//       brandName: 'mCaffeine',
//       tagline: 'Powered by Caffeine',
//     },
//   };
//   useEffect(() => {
//   console.log("Splash mounted");
// }, []);

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(0.3)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         tension: 10,
//         friction: 3,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       setTimeout(() => {
// navigation.replace("MainTabs");     
//  }, 800);
//     });
//   }, []);

//   return (
//     <View style={[styles.container, { backgroundColor: activeTheme.colors.background }]}>
//       <Animated.View
//         style={{
//           opacity: fadeAnim,
//           transform: [{ scale: scaleAnim }],
//           alignItems: 'center',
//         }}
//       >
//         <Text style={[styles.brandName, { color: activeTheme.colors.brand }]}>
//           {activeTheme.text.brandName}
//         </Text>

//         <Text style={[styles.tagline, { color: activeTheme.colors.tagline }]}>
//           {activeTheme.text.tagline}
//         </Text>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   brandName: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
//   tagline: {
//     fontSize: 14,
//     marginTop: 8,
//   },
// });



import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { defaultTheme } from '../theme/theme';

export default function SplashScreen({ navigation, theme, onAnimationEnd }) {
  // Use imported theme or fallback
  const activeTheme = theme || defaultTheme;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to MainTabs after animation
      setTimeout(() => {
        if (navigation) {
          navigation.replace('MainTabs');
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }, 800);
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: activeTheme.colors.background },
      ]}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.coffeeCup}>
          <View
            style={[
              styles.cupBody,
              { backgroundColor: activeTheme.colors.cup },
            ]}
          />
          <View
            style={[
              styles.steam1,
              { backgroundColor: activeTheme.colors.steam },
            ]}
          />
          <View
            style={[
              styles.steam2,
              { backgroundColor: activeTheme.colors.steam },
            ]}
          />
          <View
            style={[
              styles.steam3,
              { backgroundColor: activeTheme.colors.steam },
            ]}
          />
        </View>

        <Text
          style={[
            styles.brandName,
            { color: activeTheme.colors.brand },
          ]}
        >
          {activeTheme.text.brandName}
        </Text>

        <Text
          style={[
            styles.tagline,
            { color: activeTheme.colors.tagline },
          ]}
        >
          {activeTheme.text.tagline}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  coffeeCup: {
    width: 100,
    height: 120,
    marginBottom: 30,
    position: 'relative',
  },
  cupBody: {
    width: 100,
    height: 80,
    borderRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  steam1: {
    width: 4,
    height: 30,
    opacity: 0.6,
    borderRadius: 2,
    position: 'absolute',
    top: -10,
    left: 25,
  },
  steam2: {
    width: 4,
    height: 35,
    opacity: 0.5,
    borderRadius: 2,
    position: 'absolute',
    top: -15,
    left: 48,
  },
  steam3: {
    width: 4,
    height: 28,
    opacity: 0.6,
    borderRadius: 2,
    position: 'absolute',
    top: -8,
    left: 70,
  },
  brandName: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: -1,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 14,
    marginTop: 8,
    letterSpacing: 3,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});