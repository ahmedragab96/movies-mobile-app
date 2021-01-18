import deepMerge from 'lodash/merge';
import {
  RecursivePartialNonMethod,
} from '../../utils/types';

export class Color {
  constructor(
    public value: string,
    public disabledValue: string,
    public contrast: string,
    public disabledContrast: string,
  ) { }
}

export class SimpleColor {
  constructor(
    public value: string,
    public contrast: string,
  ) { }
}

export class ThemePalette {
  common = {
    black: 'black',
    white: 'white',
    transparent: 'transparent',
    link: 'darkblue',
    grey: 'grey',
    lightgrey: '#AFAFAF',
    offWhite: '#F9F9F9',
    darkGrey: '#736F6F',
    secondaryBlue: '#0068A5',
  };

  others: Record<string, string> = {};

  primary = new Color('black', 'darkgrey', 'white', 'lightgrey');

  secondary = new Color('white', 'lightgrey', 'black', 'darkgrey');

  error = new Color('red', 'darkred', 'black', 'darkgrey');

  warning = new Color('yellow', 'darkyellow', 'black', 'darkgrey');

  info = new Color('lightblue', 'blue', 'black', 'darkgrey');

  success = new Color('green', 'darkgreen', 'black', 'darkgrey');

  background = new Color('white', 'white', 'black', 'black');

  surface = new Color('white', 'white', 'black', 'black');

  constructor(t?: RecursivePartialNonMethod<ThemePalette>) {
    if (t) {
      deepMerge(this, t);
    }
  }
}
