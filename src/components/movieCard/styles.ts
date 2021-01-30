import {
  Theme,
} from 'elephanz-rn-ui';
import {
  MovieCardComponentStyles,
} from './types';

export const styles = (theme: Theme): MovieCardComponentStyles => ({
  cardContainer: {
    marginHorizontal: theme.spacing.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.primary.disabledValue,
    borderRadius: theme.spacing.spacing(1),
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
  }
});
