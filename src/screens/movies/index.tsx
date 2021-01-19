import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';

const moviesScreen: React.FC = () => {
  return <View />;
}

export const MoviesScreen = baseScreen(
  moviesScreen,
);
