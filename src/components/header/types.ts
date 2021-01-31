import { Theme } from "elephanz-rn-ui";
import { ImageSourcePropType, ImageStyle, ViewStyle } from "react-native";

export interface HeaderComponentStyles {
  container: ViewStyle;
  imageBackground: ImageStyle;
  linearGradient: ViewStyle;
}

export interface HeaderComponentProps {
  imageSource?: ImageSourcePropType;
  colors: (string | number)[];
  customStyles?: (theme: Theme) => Partial<HeaderComponentStyles>;
}
