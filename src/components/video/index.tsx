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
import { Settings } from 'settings';

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
        apiKey={Settings.config.REACT_APP_YOUTUBE_API_KEY}
        style={selectStyle('player')}
      />
    </View>
  );
}

export * from './types';
