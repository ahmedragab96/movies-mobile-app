import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  CarouselComponentProps,
} from './types';
import {
  styles,
} from './styles';

const CarouselComponent: React.FC<CarouselComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}
