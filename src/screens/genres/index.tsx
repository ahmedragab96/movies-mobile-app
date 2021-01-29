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
import { ExtendedSVG, useStyles } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';

const {
  images: {
    screens: {
      home,
    },
  },
} = Assets;

const genresScreen: React.FC = () => {
  const stores = useStores();
  const navigation = useNavigationUtils();
  const {
    selectStyle,
  } = useStyles(styles);

  const TabBarIcon = ({
    focused,
  }: { focused: boolean }) => {
    const icon = focused ? home.genresActive : home.genres;
    return (
      <View style={selectStyle('tabBarIcon')}>
        <ExtendedSVG
          svgFile={icon}
        />
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
      hello
    </Text>
  </View>;
}

export const GenresScreen = baseScreen(
  genresScreen,
);
