import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  useStyles,
  Typography,
} from 'elephanz-rn-ui';
import {
  MovieCardComponentProps,
} from './types';
import {
  styles,
} from './styles';

const MovieCardComponent: React.FC<MovieCardComponentProps> = (props) => {
  const { poster, title } = props;
  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View style={selectStyle('cardContainer')}>
    <Image
      style={selectStyle('imageContainer')}
      source={{
        uri: `https://image.tmdb.org/t/p/w780/${poster}`,
      }}
    />
    <View style={selectStyle('widthTypo')}>
      <Typography
        variant="button"
        ellipsizeMode="tail"
        numberOfLines={2}
      >
        {title}
      </Typography>
    </View>
  </View>
  );
}
export default MovieCardComponent;
