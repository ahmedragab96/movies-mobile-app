import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  Typography,
  useStyles,
  useTheme,
} from 'elephanz-rn-ui';
import {
  ActorCardComponentProps,
} from './types';
import {
  styles,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigationUtils } from 'hooks';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w342';

const ActorCardComponent: React.FC<ActorCardComponentProps> = (props: ActorCardComponentProps) => {
  const {
    selectStyle,
  } = useStyles(styles);
  const {
    theme,
  } = useTheme();
  const navigation = useNavigationUtils();
  
  return (
    <TouchableOpacity
      style={selectStyle('actorCardContainer')}
      onPress={() => navigation.navigate('ActorDetailsScreen', {
        actorId: props.id,
      })}
    >
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}/${props.picture}`
        }}
        style={selectStyle('actorProfileImage')}
      />
      <View
        style={selectStyle('actorDescContainer')}
      >
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: selectStyle('actorNameStyle')
          })}
        >
          {props.name}
        </Typography>
        <Typography
          variant={'button'}
          customStyles={() => ({
            text: selectStyle('actorWorkStyle')
          })}
        >
          {props.knownFor}
        </Typography>
      </View>
    </TouchableOpacity>
  );
}

export default ActorCardComponent;
