import React from 'react';
import {
  View,
} from 'react-native';
import {
  Typography,
  useStyles,
} from 'elephanz-rn-ui';
import {
  CarouselComponentProps,
} from './types';
import {
  styles,
} from './styles';
import Carousel from 'react-native-snap-carousel';

interface Props {
  data: any;
}
const CarouselComponent: React.FC<Props> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View>
      <Typography>
        {'This is my Carousel Component'}
      </Typography>
    </View>
  );
}

export default CarouselComponent;