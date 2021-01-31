import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  View,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import {
  useNavigationUtils,
  useStores,
} from 'hooks';
import { LoadingState } from 'utils';
import { ExtendedSVG, Typography, useStyles, useTheme } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';
import { toJS } from 'mobx';
import SliderComponent from '../../components/slider';
import CarouselComponent from '../../components/carousel';
import MovieCardComponent from 'src/components/movieCard';
import { MovieCardComponentProps, MovieCardVariants } from '../../components/movieCard/types';
import { Movie } from 'shared/DTOs';
// https://image.tmdb.org/t/p/w780/
const {
  images: {
    screens: {
      home,
    },
  },
} = Assets;

const homeScreen: React.FC = () => {
  const stores = useStores();
  const navigation = useNavigationUtils();
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();

  const TabBarIcon = ({
    focused,
  }: { focused: boolean }) => {
    const icon = focused ? home.homeActive : home.home;
    const color = focused ? theme.palette.secondary.value : theme.palette.primary.disabledContrast;
    return (
      <View
        style={selectStyle('tabBarIconContainer')}
      >
        <View style={selectStyle('tabBarIcon')}>
          <ExtendedSVG
            svgFile={icon}
          />
        </View>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: {
              color,
            }
          })}
        >
          Home
      </Typography>
      </View>
    );
  };

  useEffect(() => {
    stores.backend.movies.popularMovies.fetch();
    stores.backend.movies.topRatedMovies.fetch();
    stores.backend.movies.upComingMovies.fetch();
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);

  const renderItem: ListRenderItem<Movie> = ({item}) =>  {

    return (
      <MovieCardComponent data={item} variant={MovieCardVariants.LIST} />
    )
  }
  const renderItemCarousel: ListRenderItem<Movie> = ({item}) => {
    return (
      <MovieCardComponent data={item} variant={MovieCardVariants.FOCUSE} />
    )
  }
  const { data: popular, loadingState } = stores.backend.movies.popularMovies;
  const { data: TopRated, loadingState: TopRatedLoading } = stores.backend.movies.topRatedMovies;
  const { data: upComing, loadingState: upComingLoading } = stores.backend.movies.upComingMovies;

  if (loadingState === LoadingState.LOADING || TopRatedLoading === LoadingState.LOADING || upComingLoading === LoadingState.LOADING) {
    return (
      <ActivityIndicator
        size="small"
        style={selectStyle('spinnerStyle')}
        color={theme.palette.secondary.value}
      />
    )
  }
  return (
    <ScrollView style={selectStyle('container')}>
      <View
        style={{
          margin: 10,
          borderRadius: 10,
          width: '80%',
        }}
      >
        <CarouselComponent 
          data={upComing} 
          renderItem={renderItemCarousel} 
        />
      </View>
      <SliderComponent
        data={popular}
        subTitle="Popular"
        renderItem={renderItem}
        keyExtractor={item => (item.id).toString()}
      />
      <SliderComponent
        data={TopRated}
        subTitle="Top Rated"
        renderItem={renderItem}
        keyExtractor={item => (item.id).toString()}
      />
    </ScrollView>
  );
}

export const HomeScreen = baseScreen(
  homeScreen,
);
