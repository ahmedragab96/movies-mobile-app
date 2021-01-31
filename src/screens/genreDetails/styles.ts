import {
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  screenContainer: ViewStyle;
  spinnerStyle: ViewStyle;
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
    screenContainer: {
      flex: 1,
      backgroundColor: theme.palette.others.background,
    },
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  };
};

export default StyleSheet.create(styles);
