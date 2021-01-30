import { ImageStyle, ViewStyle } from "react-native";
import { Movie } from "shared/DTOs";
export interface MovieCardComponentProps {
  data: Movie;
  variant: MovieCardVariants;
}

export interface MovieCardComponentStyles {
  widthTypo: ViewStyle;
  cardContainer: ViewStyle;
  imageContainer: ImageStyle;
  imageContainerCarousel: ImageStyle;
  ratingContainer: ViewStyle;
}

export enum MovieCardVariants {
  FOCUSE, // focused
  DETAILS, // details
  LIST // LIST
}
