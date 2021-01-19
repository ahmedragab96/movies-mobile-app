import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';

const homeScreen: React.FC = () => {
  return <View />;
}

export const HomeScreen = baseScreen(
  homeScreen,
);
