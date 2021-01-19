import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import {
  useNavigationUtils,
  useStores,
} from 'hooks';
import { LoadingState } from 'utils';

const homeScreen: React.FC = () => {
  const stores = useStores();
  const navigation = useNavigationUtils();

  useEffect(() => {
    stores.backend.movies.popularMovies.fetch();
    // navigation.setOptions({
    //   title: '',
    //   tabBarIcon: TabBarIcon,
    // });
  }, []);

  if (stores.backend.movies.popularMovies.loadingState === LoadingState.LOADING) {
    return <Text> loading.... </Text>
  }

  console.log('popular movies === ', stores.backend.movies.popularMovies.data);
  
  return <View>
    <Text>
      hello
    </Text>
  </View>;
}

export const HomeScreen = baseScreen(
  homeScreen,
);
