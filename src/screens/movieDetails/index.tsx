import React from 'react';
import {
  baseScreen,
} from 'hoc';
import {
  VideoComponent,
} from 'components';
import { View } from 'native-base';

const movieDetailsScreen: React.FC = () => {
  return (
  <View
    style={{
      width: '100%',
      height: 320,
    }}
  >
    <VideoComponent
      videoId={"sfM7_JLk-84"}
    />
  </View>
  );
}

export const MovieDetailsScreen = baseScreen(
  movieDetailsScreen,
);
