import { ListRenderItem } from "react-native";

export interface CarouselComponentProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

export interface CarouselComponentStyles {
}
