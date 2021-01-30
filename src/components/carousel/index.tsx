import React from 'react';
import {
  View,
  Dimensions,
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


function CarouselComponent<T>(props: React.PropsWithChildren<CarouselComponentProps<T>>) {
  console.log(props.data, ' THIS IS GENARIC DATA');
  const { data, renderItem } = props;
  
  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View> 
        <Carousel 
          data={data}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          sliderHeight={Dimensions.get('window').width * 439 / 780}
          itemHeight={Dimensions.get('window').width * 439 / 780}
          itemWidth={Dimensions.get('window').width}
          pagingEnabled
          />
    </View>
  );
}

export default CarouselComponent;