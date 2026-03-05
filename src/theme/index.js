import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';
import { Sizes } from './sizes';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = isDarkMode ? darkColors : lightColors;

  return { colors, sizes: Sizes, isDarkMode };
};

// Static export for things like Splash screen that don't need hooks
export const StaticTheme = {
  colors: lightColors, // Default
  sizes: Sizes,
  text: {
    brandName: 'MCaffeine',
    tagline: 'PREMIUM SKINCARE',
    footer: 'LOADING ESSENTIALS',
  }
};