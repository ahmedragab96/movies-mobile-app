import {
  ImageStyle,
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
  container: ViewStyle;
  actorNameContainer: ViewStyle;
  actorNameText: TextStyle;
  actorDetailsContainer: ViewStyle;
  actorImageContainer: ViewStyle;
  actorImage: ImageStyle;
  spinnerStyle: ViewStyle;
  actorKnowFor: TextStyle;
  biographyContainer: ViewStyle;
  biographyText: TextStyle;
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
      color: theme.palette.common.white,
      opacity: 0.5,
      fontWeight: '300',
      fontSize: 12,
      lineHeight: 16,
      marginHorizontal: 10,
    },
    actorNameContainer: {
      marginTop: 90,
    },
    actorNameText: {
      fontWeight: 'bold',
      fontSize: spacing(5),
      lineHeight: spacing(5),
      color: theme.palette.info.value,
      width: 180,
    },
    actorDetailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 25,
    },
    actorImageContainer: {
      borderRadius: 10,
      marginRight: 20,
    },
    actorImage: {
      width: 70,
      height: 70,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    actorKnowFor: {
      color: theme.palette.secondary.value,
    },
    biographyContainer: {
      marginTop: 10,
    },
    biographyText: {
      color: theme.palette.common.white,
      opacity: 0.75,
      marginTop: 5,
    },
  };
};

export default StyleSheet.create(styles);
