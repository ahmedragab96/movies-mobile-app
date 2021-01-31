import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  useStyles,
  Typography,
  useTheme,
} from 'elephanz-rn-ui';
import {
  MovieCardComponentProps, MovieCardVariants
} from './types';
import {
  styles,
} from './styles';
import { Rating, AirbnbRating } from 'react-native-ratings';


const MovieCardComponent: React.FC<MovieCardComponentProps> = (props) => {
  const { theme } = useTheme();
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
        <View
          style={{
            borderRadius: 10,
            width: '95%',
          }}
        >
          <Image
            style={selectStyle('imageContainerCarousel')}
            resizeMode={"cover"}
            source={{
              uri: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}`,
            }}
          />
          <View style={selectStyle('ratingContainer')}>
            {
              data.adult && (
                <Typography>
                  {'16+'}
                </Typography>
              )
            }
            <Typography>
              {'10+'}
            </Typography>
          </View>
        </View>
      )}
      { variant === MovieCardVariants.DETAILS && (
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
    </View>
  );
}
export default MovieCardComponent;
