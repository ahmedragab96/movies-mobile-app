import 'react-native-gesture-handler';
import {
  AppRegistry,
} from 'react-native';
import App from './src/app';
import {
  name as appName,
} from './app.json';
import {
  Notifications,
} from './src/utils/firebaseUtils';

Notifications.configure({
  onNotification: async (notification) => {
    if (notification.userInteraction && notification.foreground) {
      console.log('NOTIFICATIONS_MODULE', 'notification pressed', notification);
    }
  },
});

Notifications.setBackgroundMessageHandler(async (notification) => {
  console.log('NOTIFICATIONS_MODULE', 'background notification received', notification);
});

AppRegistry.registerComponent(appName, () => App);
