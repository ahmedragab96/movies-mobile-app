import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import { useNavigationUtils } from 'hooks';

const splashScreen: React.FC = () => {
  const navigation = useNavigationUtils();
  navigation.navigateTo({
    name: 'home',
  });
  return <View />;
}

export const SplashScreen = baseScreen(
  splashScreen,
);
