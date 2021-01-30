import React from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';
import {
  Typography,
  useStyles,
} from 'elephanz-rn-ui';
import {
  SliderComponentProps,
} from './types';
import {
  styles,
} from './styles';

function SliderComponent<T>(props: React.PropsWithChildren<SliderComponentProps<T>>) {
  const { data, subTitle, renderItem, keyExtractor } = props;

  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View style={selectStyle('sliderContent')}>
      <View style={selectStyle('subTitleContainer')}>
        <Typography>
          {subTitle}
        </Typography>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

export default SliderComponent;