import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  SearchComponentProps,
} from './types';
import {
  styles,
} from './styles';

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}

export * from './types';
