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
import { ExtendedSVG, Typography, useStyles, useTheme } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';

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
        Movies
      </Typography>
      </View>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      title: '',
      tabBarIcon: TabBarIcon,
    });
  }, []);
 
  return <View>
    <Text>
      Movies Screen
    </Text>
  </View>;
}

export const MoviesScreen = baseScreen(
  moviesScreen,
);
