import {
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  container: ViewStyle;
  screenContainer: ViewStyle;
  tabBarIconContainer: ViewStyle;
  tabBarIcon: ViewStyle;
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
      flex: 1,
    },
    screenContainer: {
      display: 'flex',
      flexWrap: 'nowrap',
      margin: 10,
    },
    tabBarIconContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.others.bottomTabsBackground,
      width: '100%',
      marginTop: spacing(2),
    },
    tabBarIcon: {
      width: spacing(2.5),
      height: spacing(2.5),
      marginTop: spacing(2),
    },
  };
};

export default StyleSheet.create(styles);
