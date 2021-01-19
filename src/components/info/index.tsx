import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  InfoComponentProps,
} from './types';
import {
  styles,
} from './styles';

const InfoComponent: React.FC<InfoComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}
