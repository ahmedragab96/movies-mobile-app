import {
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  tabBarIcon: ViewStyle;
  spinnerStyle: ViewStyle;
  container: ViewStyle;
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
    container: {
      backgroundColor: theme.palette.others.background,
    },
    tabBarIcon: {
      width: spacing(2.5),
      height: spacing(2.5),
      marginTop: spacing(2),
    },
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
};

export default StyleSheet.create(styles);
