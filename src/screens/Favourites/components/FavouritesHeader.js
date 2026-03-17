import React from 'react';
import { ScreenHeader } from '../../../components/ScreenHeader';

export const FavouritesHeader = ({ navigation, searchValue, onSearchChange }) => (
  <ScreenHeader
    title="My Favorites"
    onBack={() => navigation?.goBack()}
    rightIcon="⋮"
    searchValue={searchValue}
    onSearchChange={onSearchChange}
    searchPlaceholder="Search favorites..."
  />
);