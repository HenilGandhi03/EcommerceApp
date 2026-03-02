// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';
// import { defaultTheme } from '../theme/theme';

// export default function SplashScreen({ navigation, theme, onAnimationEnd }) {
//   // Use imported theme or fallback
//   const activeTheme = theme || defaultTheme;

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
//       // Navigate to MainTabs after animation
//       setTimeout(() => {
//         if (navigation) {
//           navigation.replace('MainTabs');
//         }
//         if (onAnimationEnd) {
//           onAnimationEnd();
//         }
//       }, 800);
//     });
//   }, []);

//   return (
//     <View
//       style={[
//         styles.container,
//         { backgroundColor: activeTheme.colors.background },
//       ]}
//     >
//       <Animated.View
//         style={[
//           styles.logoContainer,
//           {
//             opacity: fadeAnim,
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//       >
//         <View style={styles.coffeeCup}>
//           <View
//             style={[
//               styles.cupBody,
//               { backgroundColor: activeTheme.colors.cup },
//             ]}
//           />
//           <View
//             style={[
//               styles.steam1,
//               { backgroundColor: activeTheme.colors.steam },
//             ]}
//           />
//           <View
//             style={[
//               styles.steam2,
//               { backgroundColor: activeTheme.colors.steam },
//             ]}
//           />
//           <View
//             style={[
//               styles.steam3,
//               { backgroundColor: activeTheme.colors.steam },
//             ]}
//           />
//         </View>

//         <Text
//           style={[
//             styles.brandName,
//             { color: activeTheme.colors.brand },
//           ]}
//         >
//           {activeTheme.text.brandName}
//         </Text>

//         <Text
//           style={[
//             styles.tagline,
//             { color: activeTheme.colors.tagline },
//           ]}
//         >
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
//   logoContainer: {
//     alignItems: 'center',
//   },
//   coffeeCup: {
//     width: 100,
//     height: 120,
//     marginBottom: 30,
//     position: 'relative',
//   },
//   cupBody: {
//     width: 100,
//     height: 80,
//     borderRadius: 10,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     position: 'absolute',
//     bottom: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   steam1: {
//     width: 4,
//     height: 30,
//     opacity: 0.6,
//     borderRadius: 2,
//     position: 'absolute',
//     top: -10,
//     left: 25,
//   },
//   steam2: {
//     width: 4,
//     height: 35,
//     opacity: 0.5,
//     borderRadius: 2,
//     position: 'absolute',
//     top: -15,
//     left: 48,
//   },
//   steam3: {
//     width: 4,
//     height: 28,
//     opacity: 0.6,
//     borderRadius: 2,
//     position: 'absolute',
//     top: -8,
//     left: 70,
//   },
//   brandName: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     letterSpacing: -1,
//     textShadowColor: 'rgba(0,0,0,0.3)',
//     textShadowOffset: { width: 2, height: 2 },
//     textShadowRadius: 4,
//   },
//   tagline: {
//     fontSize: 14,
//     marginTop: 8,
//     letterSpacing: 3,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//   },
// });
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native';
import { Theme } from '../theme/theme';

const { width } = Dimensions.get('window');

// The updated SplashScreen component that changes *only* the inside image to TronOs.
export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Start the parallel animation for a smooth, premium entrance
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

    // Set a timer to navigate away from the splash screen
    const timer = setTimeout(() => {
      navigation.replace('MainTabs'); // Replace with your next screen name
    }, 3000); // 3-second display time

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: Theme.colors.background }]}>
      <Animated.View 
        style={[
          styles.content, 
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        {/* LOGO SECTION WITH RINGS - This structure is kept identical to MCaffeine's layout. */}
        <View style={styles.logoContainer}>
          <View style={styles.outerRing}>
            <View style={styles.innerRing}>
              {/* THE INSIDE IMAGE BOX: This is the primary point of change.
                  The position and styling of this box are identical to the source image,
                  but the *image content* is new. The source value in the Theme's assets
                  must now point to the TronOs image. */}
              <View style={[styles.logoBox, { backgroundColor: Theme.colors.logoBoxBg }]}>
                <Image 
                  source={Theme.assets.logo} // This asset reference is changed in Theme to point to TronOs.
                  style={styles.logoImage} 
                  resizeMode="contain" 
                />
              </View>
            </View>
          </View>
        </View>

        {/* The rest of the screen elements remain completely identical to the source image,
            as the user specified only the inside image should be changed. The text content,
            typography, color, size, and other details are all kept from the MCaffeine splash. */}

        {/* BRAND TEXT SECTION: Unchanged MCaffeine name. */}
        <Text style={[styles.brandText, { color: Theme.colors.brandGold }]}>
          {Theme.text.brandName} {/* Remains 'MCaffeine' from the theme. */}
        </Text>

        {/* TAGLINE SECTION: Unchanged PREMIUM SKINCARE with lines. */}
        <View style={styles.taglineWrapper}>
          <View style={[styles.line, { backgroundColor: Theme.colors.muted }]} />
          <Text style={[styles.tagline, { color: Theme.colors.taglineGold }]}>
            {Theme.text.tagline} {/* Remains 'PREMIUM SKINCARE' from the theme. */}
          </Text>
          <View style={[styles.line, { backgroundColor: Theme.colors.muted }]} />
        </View>
      </Animated.View>

      {/* FOOTER SECTION: Unchanged LOADING ESSENTIALS with loading bar. */}
      <View style={styles.footer}>
        <View style={[styles.loadingBar, { backgroundColor: Theme.colors.ringBorder }]} />
        <Text style={[styles.footerText, { color: Theme.colors.muted }]}>
          {Theme.text.footer} {/* Remains 'LOADING ESSENTIALS' from the theme. */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
  },
  outerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Theme.colors.ringBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1.5,
    borderColor: Theme.colors.brandGold,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  // The logo box maintains its position and background color,
  // only its image content changes.
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
  logoImage: {
    width: '150%',
    height: '90%',
  },
  // Typography styling remains completely unchanged.
  brandText: {
    fontSize: 48,
    fontFamily: 'serif',
    fontWeight: '600',
    letterSpacing: 1,
  },
  taglineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  line: {
    height: 1,
    width: 40,
    marginHorizontal: 15,
  },
  tagline: {
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: '300',
  },
  // Footer styling is identical.
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  loadingBar: {
    width: width * 0.3,
    height: 1,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 10,
    letterSpacing: 2,
  },
});