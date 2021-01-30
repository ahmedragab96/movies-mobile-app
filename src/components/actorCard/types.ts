import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface ActorCardComponentProps {
  picture: string;
  name: string;
  knownFor: string;
  id: number;
}

export interface ActorCardComponentStyles {
  actorCardContainer: ViewStyle;
  actorProfileImage: ImageStyle;
  actorDescContainer: ViewStyle;
  actorNameStyle: TextStyle;
  actorWorkStyle: TextStyle;
}
