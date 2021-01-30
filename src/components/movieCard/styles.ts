import {
  Theme,
} from 'elephanz-rn-ui';
import { Dimensions } from 'react-native';
import {
  MovieCardComponentStyles,
} from './types';

export const styles = (theme: Theme): MovieCardComponentStyles => ({
  cardContainer: {
    width: '90%',
    marginHorizontal: theme.spacing.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.primary.disabledValue,
    borderRadius: theme.spacing.spacing(1),
    height: theme.spacing.spacing(32)
  },
  imageContainer: {
    width: theme.spacing.spacing(18),
    height: theme.spacing.spacing(24),
    borderRadius: theme.spacing.spacing(1),
  },
  widthTypo: {
    width: theme.spacing.spacing(12),
    marginVertical: theme.spacing.spacing(2),
    marginHorizontal: theme.spacing.spacing(1),
  },
  imageContainerCarousel: {
    flex: 1,
    height: Dimensions.get('window').width * 439 / 780,
    // width: theme.spacing.spacing(20)
  },
  ratingContainer: {
    
  }
});
