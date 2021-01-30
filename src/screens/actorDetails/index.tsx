import React, { useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';
import { useRoute } from '@react-navigation/native';
import { useStores } from 'hooks';
import { ScrollView } from 'react-native-gesture-handler';
import { Typography, useStyles } from 'elephanz-rn-ui';
import { Assets } from 'assets';
import styles from './styles';

const {
  images: {
    common,
  },
} = Assets;

const actorDetailsScreen: React.FC = () => {
  const route: any = useRoute();
  const stores = useStores();
  const {
    selectStyle,
  } = useStyles(styles);

  console.log(route.params.actorId);

  useEffect(() => {
    stores.backend.movies.getActorById(route.params.actorId);
    
  }, []);

  if (!stores.backend.movies.selectedActor) {
    return <Text> loading.....</Text>;
  }

  console.log(stores.backend.movies.selectedActor);
  
  
  return (
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
    </ScrollView>
  );
}

export const ActorDetailsScreen = baseScreen(
  actorDetailsScreen,
);
