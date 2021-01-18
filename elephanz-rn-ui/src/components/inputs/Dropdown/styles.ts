import {
  Dimensions,
  Platform,
} from 'react-native';
import {
  Theme,
} from '../../../theming';
import {
  TextFieldLabelStyles,
} from '../TextField';
import {
  DropdownStyles,
} from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const defaultStyles = (theme: Theme): DropdownStyles => {
  const {
    shape: {
      borderRadiusStyles,
      borderWidthStyles,
    },
    spacing: {
      spacing,
    },
    palette: {
      others,
    },
  } = theme;

  return {
    itemStyle: (labelStyle) => {
      if (labelStyle === TextFieldLabelStyles.FLOATING) {
        return {
          ...borderRadiusStyles,
          ...borderWidthStyles,
          borderColor: theme.palette.primary.value,
          marginLeft: 0,
        };
      }
      return {
        borderBottomWidth: 0,
        marginLeft: 0,
      };
    },
    chevron: {
      maxWidth: spacing(1.5),
      maxHeight: spacing(1.5),
      alignSelf: 'flex-end',
      marginTop: 4,
    },
    value: {
      fontSize: spacing(2),
      maxWidth: '100%',
      height: '100%',
    },
    pseudoView: {
      position: 'absolute',
      top: spacing(1),
      left: -spacing(0.5),
      height: spacing(7),
      width: '100%',
      padding: spacing(2),
      paddingRight: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    picker: {
      opacity: 0,
      position: 'absolute',
      top: spacing(1),
      left: Platform.OS === 'ios' ? -SCREEN_WIDTH * 0.5 + spacing(2) : 0,
      height: spacing(7),
      width: SCREEN_WIDTH - spacing(4),
      padding: spacing(2),
      alignSelf: 'stretch',
    },
    item: {
      borderBottomWidth: 0,
      marginLeft: 0,
      flex: 1,
    },
    labelStyle: (labelStyle) => {
      if (labelStyle === TextFieldLabelStyles.FLOATING) {
        return {
          paddingLeft: Math.max(borderRadiusStyles.borderBottomLeftRadius, borderRadiusStyles.borderTopLeftRadius),
        };
      }
      return {
        fontSize: spacing(2),
        color: others.title,
      };
    },
  };
};
