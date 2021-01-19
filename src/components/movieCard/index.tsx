import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  MovieCardComponentProps,
} from './types';
import {
  styles,
} from './styles';

const MovieCardComponent: React.FC<MovieCardComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}

export * from './types';

export * from './types';
