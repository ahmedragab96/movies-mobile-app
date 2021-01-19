import {
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  StackScreenProps,
} from '@react-navigation/stack';
import {
} from 'screens';
import {
  NavigationFactory,
  NavigatorTypes,
  ScreenNames,
} from 'shared';
import {
  SplashScreen,
  HomeScreen,
  MoviesScreen,
  GenresScreen,
  ActorsScreen,
  MovieDetailsScreen,
  ActorDetailsScreen,
  GenreDetailsScreen,
} from 'screens';
export type ScreenTypesAndParams = ScreenNames<NavigationFactory['navigator']>;

export type ScreenParams<T extends ScreenTypesAndParams = ScreenTypesAndParams> = {
  [K in keyof T]: T[K] extends { params: object | undefined }
  ? T[K]['params']
  : undefined;
};

export type ScreenComponents<T extends ScreenTypesAndParams> = {
  [K in keyof T]: T[K] extends { type: NavigatorTypes; params: object | undefined }
  ? T[K]['type'] extends NavigatorTypes.STACK
  ? K extends keyof ScreenParams
  ? React.FC<StackScreenProps<ScreenParams, K>>
  : undefined
  : K extends keyof ScreenParams
  ? React.FC<BottomTabScreenProps<ScreenParams, K>>
  : undefined
  : undefined;
};

export const ROUTES: ScreenComponents<ScreenTypesAndParams> = {
  splash: SplashScreen,
  home: HomeScreen,
  movies: MoviesScreen,
  genres: GenresScreen,
  actors: ActorsScreen,
  movieDetails: MovieDetailsScreen,
  actorDetails: ActorDetailsScreen,
  genreDetails: GenreDetailsScreen,
};
