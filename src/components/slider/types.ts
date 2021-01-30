import { ListRenderItem, ViewStyle } from "react-native";

export interface SliderComponentProps<T> {
  data: T[];
  subTitle: string;
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
}
export interface SliderComponentStyles {
  sliderContent: ViewStyle;
  subTitleContainer: ViewStyle;
}
