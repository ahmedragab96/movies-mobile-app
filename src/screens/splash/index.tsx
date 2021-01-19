import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';

const splashScreen: React.FC = () => {
  return <View />;
}

export const SplashScreen = baseScreen(
  splashScreen,
);
