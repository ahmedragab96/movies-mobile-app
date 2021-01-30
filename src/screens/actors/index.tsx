import React, { useEffect } from 'react';
import {
  ActivityIndicator,
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
import { ExtendedSVG, Typography, useStyles, useTheme } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';
import ActorCardComponent from '../../components/actorCard';
import { Actor } from 'shared/DTOs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const {
  images: {
    screens: {
      home,
    },
  },
} = Assets;


const actorsScreen: React.FC = () => {
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
    const icon = focused ? home.actorsActive : home.actors;
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
        Actors
      </Typography>
      </View>
    );
  };

  useEffect(() => {
    stores.backend.movies.actors.fetch();
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);

  if (stores.backend.movies.actors.loadingState === LoadingState.LOADING) {
    return (
      <ActivityIndicator
        size={'small'}
        color={theme.palette.secondary.value}
      />
    );
  }

  console.log('actors === ', stores.backend.movies.actors.data);

  const scrollableList = () => (
    <FlatList
      data={stores.backend.movies.actors.data}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({
        item,
      }) => (
        <ActorCardComponent
          picture={item.profile_path}
          name={item.name}
          knownFor={item.known_for_department}
          id={item.id}
        />
      )}
      directionalLockEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces
      alwaysBounceHorizontal={false}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-around',
      }}
    />
  );

  return (
    <ScrollView
      style={{
        display: 'flex',
        // flex: 1,
        flexWrap: 'nowrap',
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      {scrollableList()}
    </ScrollView>
  );
}

export const ActorsScreen = baseScreen(
  actorsScreen,
);
