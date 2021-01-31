import React from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  HeaderComponentProps,
} from './types';
import {
  styles,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const {
    imageSource,
    colors,
    customStyles,
    children,
  } = props;
  const {
    selectStyle,
  } = useStyles(styles, customStyles);
  
  if (!imageSource) {
    return (
      <View
        style={selectStyle('container')}
      >
        <LinearGradient
          style={selectStyle('linearGradient')}
          colors={colors}
        >
          {children}
        </LinearGradient>
      </View>
    );
  }

  return (
    <View
      style={selectStyle('container')}
    >
      <ImageBackground
        style={selectStyle('imageBackground')}
        source={imageSource}
      >
        <LinearGradient
          style={selectStyle('linearGradient')}
          colors={colors}
        >
          {children}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}


export * from './types';
