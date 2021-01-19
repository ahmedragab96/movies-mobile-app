import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  SliderComponentProps,
} from './types';
import {
  styles,
} from './styles';

const SliderComponent: React.FC<SliderComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}
