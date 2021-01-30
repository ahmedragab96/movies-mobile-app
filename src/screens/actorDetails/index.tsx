import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import { useRoute } from '@react-navigation/native';
import { useStores } from 'hooks';
import { ScrollView } from 'react-native-gesture-handler';
import { Typography, useStyles, useTheme } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';
import { LoadingState } from 'utils';
import SliderComponent from 'src/components/slider';

const {
  images: {
    common,
  },
} = Assets;

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w342';

const actorDetailsScreen: React.FC = () => {
  const route: any = useRoute();
  const stores = useStores();
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();

  console.log(route.params.actorId);

  useEffect(() => {
    stores.backend.movies.getActorById(route.params.actorId);
    stores.backend.movies.getActorMovies(route.params.actorId);
  }, []);

  if (stores.backend.movies.getActorsLoadingState === LoadingState.LOADING
      || stores.backend.movies.getActorsMoviesLoadingState === LoadingState.LOADING 
    ) {
    return (
      <View
        style={selectStyle('container')}
      >
        <ActivityIndicator
          size="small"
          style={selectStyle('spinnerStyle')}
          color={theme.palette.secondary.value}
        />
      </View>
    );
  }

  console.log(stores.backend.movies.selectedActor.birthday);
  const {
    name,
    birthday,
    place_of_birth,
    known_for_department,
    biography,
    profile_path,
  } = stores.backend.movies.selectedActor;

  const birth = new Date(birthday);
  const formattedBirthDay = birth.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric'});
 
  return (
    <View
      style={selectStyle('container')}
    >
      <ScrollView
        style={selectStyle('screenCOntainer')} 
      >
        <View
          style={selectStyle('backButtonContainer')}
        >
          <common.back/>
          <Typography
            variant={'button'}
            customStyles={() => ({
              text: selectStyle('backText')
            })}
          >
            Back
          </Typography>
        </View>
        <View
          style={selectStyle('actorNameContainer')}
        >
          <Typography
            variant={'h1'}
            customStyles={() => ({
              text: selectStyle('actorNameText')
            })}
          >
            {name}
          </Typography>
        </View>
        <View
          style={selectStyle('actorDetailsContainer')}
        >
          <View
            style={selectStyle('actorImageContainer')}
          >
            <Image
              source={{
                uri: `${IMAGE_BASE_URL}/${profile_path}`
              }}
              style={selectStyle('actorImage')}
            />
          </View>
          <View>
            <Typography
              variant={'button'}
            >
              {formattedBirthDay}
            </Typography>
            <Typography
              variant={'button'}  
            >
              {place_of_birth}
            </Typography>
            <Typography
              variant={'button'}
              customStyles={() => ({
                text: selectStyle('actorKnowFor')
              })}
            >
              {known_for_department}
            </Typography>
          </View>
        </View>
        <SliderComponent data={stores.backend.movies.selectedActorMovies} subTitle="Known For"/>
        <View
          style={selectStyle('biographyContainer')}
        >
          <Typography
            variant={'h6'}
          >
              Biography
          </Typography>
          <Typography
            variant={'button'}
            customStyles={() => ({
              text: selectStyle('biographyText')
            })}
          >
              {biography}
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
}

export const ActorDetailsScreen = baseScreen(
  actorDetailsScreen,
);
