import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
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
import { Genre, Genres } from 'shared/DTOs';

const {
  images: {
    screens: {
      home,
      genres,
    },
  },
} = Assets;

const genresScreen: React.FC = () => {
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
    const icon = focused ? home.genresActive : home.genres;
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
        Genres
      </Typography>
      </View>
    );
  };

  const getGenreImage = (genreName: Genres) => {
    if (genreName === Genres.COMEDY) {
      return (
        <ExtendedSVG
          svgFile={genres.comedy}
        />
      );
    } else if (genreName === Genres.CRIME) {
      return (
        <ExtendedSVG
          svgFile={genres.crime}
        />
      );
    } else if (genreName === Genres.FANTASY) {
      return (
        <ExtendedSVG
          svgFile={genres.fantasy}
        />
      );
    } else if (genreName === Genres.HORROR) {
      return (
        <ExtendedSVG
          svgFile={genres.horror}
        />
      );
    } else if (genreName === Genres.ROMANCE) {
      return (
        <ExtendedSVG
          svgFile={genres.romance}
        />
      );
    } else if (genreName === Genres.SCIFI) {
      return (
        <ExtendedSVG
          svgFile={genres.scifi}
        />
      );
    }
  }

  const genreComponent = (genre: Genre) => {
    if (!(Object.values(Genres) as string[]).includes(genre.name)) {
      console.log('no === ');
      return;
    }
    return(
      <TouchableOpacity
        onPress={() => navigation.navigate('genreDetails', {
          genreId: genre.id
        })}
        style={{
          height: 60,
          width: '95%',
          backgroundColor: 'rgba(64,64,86,0.55)',
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center',
          paddingLeft: 5,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
          }}
        >
          {getGenreImage(genre.name as Genres)} 
        </View>
        <View>
          <Typography
            variant={'h6'}
            customStyles={() => ({
              text: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                marginHorizontal: 10
              }
            })}
          >
            {genre.name}
        </Typography>
      </View>
      </TouchableOpacity>
    );
  }; 

  useEffect(() => {
    stores.backend.movies.genres.fetch();
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);

  if (stores.backend.movies.genres.loadingState === LoadingState.LOADING) {
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
      <Typography
        variant={'h4'}
        customStyles={() => ({
          text: {
            opacity: 0.75,
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
          }
        })}
      >
        Genres
      </Typography>
      {
        stores.backend.movies.genres.data && stores.backend.movies.genres.data.map((genre) => {
          return genreComponent(genre);
        })
      }
    </View>
  );
}

export const GenresScreen = baseScreen(
  genresScreen,
);
