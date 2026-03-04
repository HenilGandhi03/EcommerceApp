import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Sizes = {
  width,
  padding: 20,
  headerCurve: 45,
  catCircle: 68,
  offerCardWidth: width * 0.85,
  productCardWidth: 165, // Controlled size for Top Picks
  productImgHeight: 130,
  radiusL: 25,
  radiusM: 15,
};