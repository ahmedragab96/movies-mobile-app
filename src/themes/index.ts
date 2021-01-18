import {
  Theme,
} from 'elephanz-rn-ui';

export const defaultThemeFactory = () => new Theme({
  palette: {
    primary: {
      value: '#0F206C',
      contrast: '#F0EFFF',
      disabledValue: '#878FB5',
    },
    secondary: {
      value: '#EE8F21',
      disabledValue: '#7E5747',
    },
    info: {
      value: '#736F6F',
      contrast: '#FFFFFF',
    },
    others: {
      bottomTabsBackground: '#F9F9F9',
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
