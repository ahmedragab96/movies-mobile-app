import {
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  tabBarIconContainer: ViewStyle;
  tabBarIcon: ViewStyle;
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
    tabBarIconContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.others.bottomTabsBackground,
      width: 100,
      marginTop: spacing(2),
    },
    tabBarIcon: {
      width: spacing(2.5),
      height: spacing(2.5),
      marginTop: spacing(2),
    },
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
