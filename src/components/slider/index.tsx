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
import { toJS } from 'mobx';
import MovieCardComponent from '../../components/movieCard';

const SliderComponent: React.FC<SliderComponentProps> = (props) => {
  const { data, subTitle } = props;
  
  const renderItem = (data: any) => {
    const { poster_path, title } = toJS(data.item);
    return (
      <MovieCardComponent poster={poster_path} title={title} />
    )
  }
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
        keyExtractor={item => (item.id).toString()}
      />
    </View>
  )
}

export default SliderComponent;