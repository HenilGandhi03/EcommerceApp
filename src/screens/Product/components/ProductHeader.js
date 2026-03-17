import React from 'react';
import { ScreenHeader } from '../../../components/ScreenHeader';

export const ProductHeader = ({ title = 'Shop', navigation, searchValue, onSearchChange }) => (
  <ScreenHeader
    title={title}
    onBack={() => navigation?.goBack()}
    rightIcon="🛍"
    onRightPress={() => navigation?.navigate('Cart')}
    searchValue={searchValue}
    onSearchChange={onSearchChange}
    searchPlaceholder="Search for coffee skincare..."
  />
);