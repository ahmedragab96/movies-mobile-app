import React, { useEffect } from 'react';
import {
  baseScreen,
} from 'hoc';
import {
  VideoComponent,
} from 'components';
import { View } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { useStyles, useTheme } from 'elephanz-rn-ui';
import styles from './styles';
import { useStores } from 'hooks';
import { LoadingState } from 'utils';
import { ActivityIndicator } from 'react-native';

const movieDetailsScreen: React.FC = () => {
  const route: any = useRoute();
  const stores = useStores();
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();

  console.log(route.params.movieId);

  useEffect(() => {
    stores.backend.movies.getMovieById(route.params.movieId);
  }, []);

  if ( stores.backend.movies.getMovieLoadingState === LoadingState.LOADING) {
    return (
      <ActivityIndicator
        size="small"
        style={selectStyle('spinnerStyle')}
        color={theme.palette.secondary.value}
      />
    )
  }

  return (
  <View
    style={{
      width: '100%',
      height: 320,
    }}
  >
    <VideoComponent
      videoId={stores.backend.movies.selectedMovie.trailer}
    />
  </View>
  );
}

export const MovieDetailsScreen = baseScreen(
  movieDetailsScreen,
);
