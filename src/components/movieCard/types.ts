import { ImageStyle, ViewStyle } from "react-native";
export interface MovieCardComponentProps {
  title: string;
  poster: string;
}

export interface MovieCardComponentStyles {
  widthTypo: ViewStyle;
  cardContainer: ViewStyle;
  imageContainer: ImageStyle;
}
