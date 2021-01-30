import {
  Theme,
} from 'elephanz-rn-ui';
import {
  ActorCardComponentStyles,
} from './types';

export const styles = (theme: Theme): ActorCardComponentStyles => ({
  actorCardContainer: {
    width: '45%',
    height: 275,
    borderRadius: 10,
    marginVertical: 8,
    shadowRadius: 5,
    shadowColor: theme.palette.common.black,
    shadowOpacity: 1,
  },
  actorProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  actorDescContainer: {
    position: 'absolute',
    left: 12,
    bottom: 15,
  },
  actorNameStyle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  actorWorkStyle: {
    color: theme.palette.secondary.value,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 'bold',
  },
});
