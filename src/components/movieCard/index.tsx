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
  MovieCardComponentProps, MovieCardVariants
} from './types';
import {
  styles,
} from './styles'

const MovieCardComponent: React.FC<MovieCardComponentProps> = (props) => {
  const { data, variant } = props;
  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View style={{ flex: 1 }}>
      { variant === MovieCardVariants.LIST && (
        <View style={selectStyle('cardContainer')}>
          <Image
            style={selectStyle('imageContainer')}
            source={{
              uri: `https://image.tmdb.org/t/p/w780/${data.poster_path}`,
            }}
          />
          <View style={selectStyle('widthTypo')}>
            <Typography
              variant="button"
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {data.title}
            </Typography>
          </View>
        </View>
      )}
      {variant === MovieCardVariants.FOCUSE && (
        <View>
          <Image
            style={selectStyle('imageContainerCarousel')}
            resizeMode={"cover"}
            source={{
              uri: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}`,
            }}
          />
          <View>
            <Typography>
              {'+16'}
            </Typography>
          </View>
  
        </View>
      )}
    </View>
  );
}
export default MovieCardComponent;
