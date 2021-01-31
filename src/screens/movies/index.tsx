import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ActivityIndicator,
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
import { HeaderComponent } from 'components';
import { TextField } from 'elephanz-rn-ui/src/components/inputs/TextField';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MovieCardComponent from 'src/components/movieCard';
import { MovieCardVariants } from 'src/components/movieCard/types';


const {
  images: {
    screens: {
      home,
    },
  },
} = Assets;

const moviesScreen: React.FC = () => {
  const stores = useStores();
  const navigation = useNavigationUtils();
  const [searchText, setsearchText] = useState('');
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();

  const TabBarIcon = ({
    focused,
  }: { focused: boolean }) => {
    const icon = focused ? home.moviesActive : home.movies;
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
          Movies
      </Typography>
      </View>
    );
  };

  useEffect(() => {
    stores.backend.movies.allMovies.fetch();
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);

  const scrollableList = () => (
    <FlatList
      data={stores.backend.movies.allMovies.data}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({
        item,
      }) => (
        <MovieCardComponent data={item} variant={MovieCardVariants.LIST} />
      )}
      directionalLockEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces
      alwaysBounceHorizontal={false}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-around',
        marginVertical: 10
      }}
    />
  );

  const search = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {

  }

  if (stores.backend.movies.allMovies.loadingState === LoadingState.LOADING) {
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
    );
  }

  return (
    <View
      style={selectStyle('screenContainer')}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <TextInput
          onChange={search}
          value={searchText}
          style={{
            borderRadius: 10,
            borderColor: 'rgba(99,99,117,0.5)',
            borderWidth: 1,
            height: 50,
            marginVertical: 10,
            marginHorizontal: 10,
            paddingLeft: 15,
            flex: 1,
          }}
          placeholder={'Enter Movie Name'}
          placeholderTextColor={'rgba(255,255,255,0.2)'}
        />
        <View
          style={{
            position: 'absolute',
            right: 25,
            bottom: 25,
            width: 20,
            height: 20,
          }}
        >
          <ExtendedSVG
            svgFile={home.search}
          />
        </View>
      </View>
      <ScrollView>
        {scrollableList()}
      </ScrollView>
    </View>
  );
}

export const MoviesScreen = baseScreen(
  moviesScreen,
);
