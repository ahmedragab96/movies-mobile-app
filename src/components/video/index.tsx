import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  VideoComponentProps,
} from './types';
import {
  styles,
} from './styles';

const VideoComponent: React.FC<VideoComponentProps> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}

export * from './types';
