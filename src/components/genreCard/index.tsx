import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  GenreCardComponentProps,
} from './types';
import {
  styles,
} from './styles';

const GenreCardComponent: React.FC<GenreCardComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}

export * from './types';
