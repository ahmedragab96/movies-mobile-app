import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  View,
  FlatList,
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
import LinearGradient from 'react-native-linear-gradient';
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
        style={{
          display: "flex",
          alignItems: "center",
        }}
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
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);

  const { data: popular, loadingState } = stores.backend.movies.popularMovies;
  const { data: TopRated, loadingState: TopRatedLoading } = stores.backend.movies.topRatedMovies;
  if (loadingState === LoadingState.LOADING && TopRatedLoading === LoadingState.LOADING) {
    return (
      <ActivityIndicator
        size="small"
        style={selectStyle('spinnerStyle')}
        color={theme.palette.secondary.value}
      />
    )
  }
  return (
    <View style={selectStyle('container')}>
      <SliderComponent data={popular} subTitle="Popular"/>
      <SliderComponent data={TopRated} subTitle="Top Rated" />
    </View>
  );
}

export const HomeScreen = baseScreen(
  homeScreen,
);
