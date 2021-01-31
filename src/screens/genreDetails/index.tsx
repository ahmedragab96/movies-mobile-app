import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import { useRoute } from '@react-navigation/native';
import { useNavigationUtils, useStores } from 'hooks';
import { selectStyle, useStyles, useTheme } from 'elephanz-rn-ui';
import styles from './styles';
import { LoadingState } from 'utils';
import { FlatList } from 'react-native-gesture-handler';
import MovieCardComponent from 'src/components/movieCard';
import { MovieCardVariants } from 'src/components/movieCard/types';



const genreDetailsScreen: React.FC = () => {
  const route: any = useRoute();
  const stores = useStores();
  const navigation = useNavigationUtils();
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();

  useEffect(() => {
    stores.backend.movies.moviesGenre.updateOptions({
      genreId: route.params.genreId,
    });
    stores.backend.movies.moviesGenre.fetch();
  }, []);

  if (stores.backend.movies.moviesGenre.loadingState === LoadingState.LOADING) {
    return (
      <ActivityIndicator
        size="small"
        style={selectStyle('spinnerStyle')}
        color={theme.palette.secondary.value}
      />
    )
  }

  const scrollableList = () => (
    <FlatList
      data={stores.backend.movies.moviesGenre.data}
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

  return (
    <View
      style={selectStyle('screenContainer')}
    >
      {scrollableList()}
    </View>
  );
}

export const GenreDetailsScreen = baseScreen(
  genreDetailsScreen,
);
