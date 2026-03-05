import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useTheme } from '../../theme';

import { FavouritesHeader } from './components/FavouritesHeader';
import { FavouritesGrid } from './components/FavouritesGrid';
import { FavouritesEmpty } from './components/FavouritesEmpty';
import { RecommendedCards } from '../Home/components/RecommendedCards'; 
const INITIAL_FAVOURITES = [
  {
    id: '1',
    title: 'Naked & Raw Coffee Body Scrub',
    size: '100g',
    price: '$12.00',
    bgColor: '#C8956C',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
  },
  {
    id: '2',
    title: 'Mocha Coffee Face Wash',
    size: '75ml',
    price: '$18.00',
    bgColor: '#D4C5B8',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400',
  },
  {
    id: '3',
    title: 'Latte Coffee Moisturizer',
    size: '50ml',
    price: '$15.00',
    bgColor: '#E8C9A8',
    image: 'https://images.unsplash.com/photo-1620912189862-3f0d3a8d6f77?w=400',
  },
];

export default function FavouriteScreen({ navigation }) {
  const { colors } = useTheme();
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState(INITIAL_FAVOURITES);

  const handleRemove = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    navigation?.navigate('Cart', { addItem: item });
  };

  const filtered = favourites.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FavouritesHeader
        navigation={navigation}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.length === 0 ? (
          <FavouritesEmpty navigation={navigation} />
        ) : (
          <FavouritesGrid
            items={filtered}
            onRemove={handleRemove}
            onAddToCart={handleAddToCart}
            navigation={navigation}
          />
        )}

        {/* <RecommendedCards data={INITIAL_FAVOURITES} navigation={navigation} /> */}
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';

// import { useTheme } from '../../theme';
// import { FavouritesHeader } from './components/FavouritesHeader';
// import { FavouritesGrid } from './components/FavouritesGrid';
// import { FavouritesEmpty } from './components/FavouritesEmpty';
// import { RecommendedCards } from '../Home/components/RecommendedCards';

// const INITIAL_FAVOURITES = [
//   {
//     id: '1',
//     title: 'Naked & Raw Coffee Body Scrub',
//     size: '100g',
//     price: '$12.00',
//     bgColor: '#C8956C',
//     image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
//   },
//   {
//     id: '2',
//     title: 'Mocha Coffee Face Wash',
//     size: '75ml',
//     price: '$18.00',
//     bgColor: '#D4C5B8',
//     image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400',
//   },
//   {
//     id: '3',
//     title: 'Latte Coffee Moisturizer',
//     size: '50ml',
//     price: '$15.00',
//     bgColor: '#E8C9A8',
//     image: 'https://images.unsplash.com/photo-1620912189862-3f0d3a8d6f77?w=400',
//   },
// ];

// export default function FavouriteScreen({ navigation }) {
//   const { colors } = useTheme();
//   const [search, setSearch] = useState('');
//   const [favourites, setFavourites] = useState(INITIAL_FAVOURITES);

//   const handleRemove = (id) => {
//     setFavourites((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleAddToCart = (item) => {
//     navigation?.navigate('Cart', { addItem: item });
//   };

//   const filtered = favourites.filter((p) =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // Map to shape RecommendedCards expects
//   const recommendedData = INITIAL_FAVOURITES.map((item) => ({
//     ...item,
//     img: item.image,
//     name: item.title,
//     sub: item.size,
//     price: item.price.replace('$', ''),
//   }));

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <FavouritesHeader
//         navigation={navigation}
//         searchValue={search}
//         onSearchChange={setSearch}
//       />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {filtered.length === 0 ? (
//           <FavouritesEmpty navigation={navigation} />
//         ) : (
//           <FavouritesGrid
//             items={filtered}
//             onRemove={handleRemove}
//             onAddToCart={handleAddToCart}
//             navigation={navigation}
//           />
//         )}

//         <RecommendedCards data={recommendedData} navigation={navigation} />

//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });