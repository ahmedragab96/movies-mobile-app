import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  VideoComponentProps,
} from './types';
import {
  styles,
} from './styles';

import YoutubeTemp from 'react-native-youtube';

const Youtube = YoutubeTemp as any;

export const VideoComponent: React.FC<VideoComponentProps> = (props) => {
  const {
    videoId,
  } = props;
  const {
    selectStyle,
  } = useStyles(styles);
  return (
    <View
      style={selectStyle('container')}
    >
      <Youtube
        videoIds={[videoId]}
        apiKey={'AIzaSyCllQItH8vtB1TTGsP-6ufUSU4RWKML0Ro'}
        style={selectStyle('player')}
      />
    </View>
  );
}

export * from './types';
