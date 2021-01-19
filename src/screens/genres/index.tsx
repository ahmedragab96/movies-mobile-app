import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';

const genresScreen: React.FC = () => {
  return <View />;
}

export const GenresScreen = baseScreen(
  genresScreen,
);
