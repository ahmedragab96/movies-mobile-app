import {
  NativeBase,
} from 'native-base';
import {
  ReactText,
} from 'react';
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  SvgProps,
} from 'react-native-svg';
import {
  DropdownTypes,
} from '../../GeneralFormView';
import {
  BaseFieldProps,
} from '../types';

export interface DropdownStyles {
  itemStyle: (labelStyle: TextFieldLabelStyles) => ViewStyle;
  labelStyle: (labelStyle: TextFieldLabelStyles) => TextStyle;
  picker: ViewStyle;
  item: ViewStyle;
  chevron: ImageStyle
  value: TextStyle;
  pseudoView: ViewStyle;
}

export interface DropdownProps extends BaseFieldProps<string | string[]> {
  itemProps?: Partial<NativeBase.Item>;
  labelProps?: Partial<NativeBase.Label>;
  inputProps?: Partial<NativeBase.Input>;
  labelStyle?: TextFieldLabelStyles;
  type?: DropdownTypes;
  multiple?: boolean;
  onSelect?: (value: string) => void;
  selectText?: string;
  options: DropdownOption[];
  arrowIcon?: React.FunctionComponent<SvgProps>;
  onChange: (value: ReactText | string[]) => void;
  isRequired?: boolean;
}

export interface DropdownOption {
  label: string;
  value: string;
}

export enum TextFieldLabelStyles {
  FIXED = 'fixedLabel',
  INLINE = 'inlineLabel',
  STACKED = 'stackedLabel',
  FLOATING = 'floatingLabel',
}
