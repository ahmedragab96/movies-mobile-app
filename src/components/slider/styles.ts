import {
  Theme,
} from 'elephanz-rn-ui';
import {
  SliderComponentStyles,
} from './types';

export const styles = (theme: Theme): SliderComponentStyles => ({
  sliderContent: {
    marginVertical: theme.spacing.spacing(1),
  },
  subTitleContainer: {
    marginHorizontal: theme.spacing.spacing(1),
    justifyContent: 'center',
    marginVertical: theme.spacing.spacing(1)
  }
});
