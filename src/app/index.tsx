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
  defaultThemeFactory,
} from '../themes';

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
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
