import React, { useEffect } from 'react';
import {
  baseScreen,
} from 'hoc';
import {
  ScrollView
} from 'react-native';
import {
  VideoComponent,
} from 'components';
import { View } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { Typography, useStyles, useTheme } from 'elephanz-rn-ui';
import styles from './styles';
import { useStores } from 'hooks';
import { LoadingState } from 'utils';
import { ActivityIndicator, ListRenderItem } from 'react-native';
import SliderComponent from 'src/components/slider';
import { Movie } from 'shared/DTOs';
import { MovieCardVariants } from 'src/components/movieCard/types';
import MovieCardComponent from 'src/components/movieCard';

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
    stores.backend.movies.similarMovies.updateOptions({
      id:route.params.movieId, 
    });
    stores.backend.movies.similarMovies.fetch();
  }, []);

  if ( stores.backend.movies.getMovieLoadingState === LoadingState.LOADING || stores.backend.movies.similarMovies.loadingState === LoadingState.LOADING) {
    return (
    <View
      style={selectStyle('screenContainer')}
    >
      <ActivityIndicator
        size="small"
        style={selectStyle('spinnerStyle')}
        color={theme.palette.secondary.value}
      />
    </View>
    )
  }

  const renderItem: ListRenderItem<Movie> = ({item}) =>  {

    return (
      <MovieCardComponent data={item} variant={MovieCardVariants.LIST} />
    )
  }

  const {
    trailer,
    title,
    vote_count,
    vote_average,
    overview,
    genres,
  } = stores.backend.movies.selectedMovie;

  let genresList = '';
  const genresCount = genres && genres.length;
  genres && genres.forEach((item, index) => {
    genresList += (index === genresCount - 1) ? `${item.name}` : `${item.name}, `;
  })

  return (
    <ScrollView
      style={selectStyle('screenContainer')}
    >
      <View
        style={{
          width: '100%',
          height: 320,
        }}
      >
        <VideoComponent
          videoId={trailer}
        />
      </View>
      <View
        style={selectStyle('movieDetailsContainer')}
      >
        <Typography
          variant={'h6'}
          customStyles={() => ({
            text: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
            }
          })}
        >
          {title}
        </Typography>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: {
              color: '#FF3466'
            }
          })}
        >
          {genresList}
      </Typography>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: {
              color: '#6D6D80'
            }
          })}
        >
          {`${vote_count} REVIEWS`}
        </Typography>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: {
              color: 'white'
            }
          })}
        >
          Storyline
        </Typography>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: {
              opacity: 0.75,
              color: 'white'
            }
          })}
        >
          {overview}
        </Typography>
      </View>
      <SliderComponent
        data={stores.backend.movies.similarMovies.data}
        subTitle="Similar Movies"
        renderItem={renderItem}
        keyExtractor={item => (item.id).toString()}
      />
    </ScrollView>
  );
}

export const MovieDetailsScreen = baseScreen(
  movieDetailsScreen,
);
