export interface BaseFieldProps<T> {
  onChange: (text: T) => any;
  value: T;
  onFocus?: () => any;
  onBlur?: () => any;
  isFocused?: boolean;
  disabled?: boolean;
  label?: string;
}
