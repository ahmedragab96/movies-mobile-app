import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {
  ThemeProvider,
} from 'elephanz-rn-ui';
import {
  AppNavigationContainer,
} from 'navigation';
import {
  Settings,
} from 'settings';
import {
  UpdatingProgressBar,
} from 'components';
import codePush from 'react-native-code-push';

import {
  defaultThemeFactory,
} from '../themes';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
};

const App: React.FC = () => {
  Settings.init();
  return (
    <ThemeProvider theme={defaultThemeFactory} dependencies={{}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AppNavigationContainer />
        <UpdatingProgressBar />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default codePush(codePushOptions)(App);
