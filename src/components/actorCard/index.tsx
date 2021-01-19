import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  ActorCardComponentProps,
} from './types';
import {
  styles,
} from './styles';

const ActorCardComponent: React.FC<ActorCardComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}
