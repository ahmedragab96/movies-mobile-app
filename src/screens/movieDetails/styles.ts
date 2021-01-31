import {
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  spinnerStyle: ViewStyle;
  screenContainer: ViewStyle;
  movieDetailsContainer: ViewStyle;
}

const styles = (theme: Theme): IStyles => {
  const {
    spacing: {
      spacing,
    },
    palette: {
      common,
    },
  } = theme;
  return {
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    screenContainer: {
      flex: 1,
      backgroundColor: theme.palette.others.background,
    },
    movieDetailsContainer: {
      marginHorizontal: 10,
    }
  };
};

export default StyleSheet.create(styles);
