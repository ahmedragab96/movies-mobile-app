import {
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  Theme,
} from 'elephanz-rn-ui';

interface IStyles {
  screenCOntainer: ViewStyle;
  backButtonContainer: ViewStyle;
  backText: TextStyle;
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
    screenCOntainer: {
      margin: 10,
    },
    backButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    backText: {
      color: theme.palette.others.bottomTabsBackground,
      opacity: 0.5,
      fontWeight: '300',
      fontSize: 12,
      lineHeight: 16,
      marginHorizontal: 10,
    }
  };
};

export default StyleSheet.create(styles);
