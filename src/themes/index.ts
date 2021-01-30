import {
  Theme,
} from 'elephanz-rn-ui';

export const defaultThemeFactory = () => new Theme({
  palette: {
    primary: {
      value: '#E5E5E5',
      contrast: '#F0EFFF',
      disabledValue: '#777777',
    },
    secondary: {
      value: '#FF3365',
      disabledValue: '#7E5747',
    },
    info: {
      value: '#C4C4C4',
      contrast: '#FFFFFF',
    },
    others: {
      bottomTabsBackground: '#1B1B28',
      background: '#222232',
    },
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: 'System',
    fontSize: 14,
  },
  shape: {
    borderRadiusStyles: {
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
  },
});
