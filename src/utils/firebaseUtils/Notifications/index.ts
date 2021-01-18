import messaging from '@react-native-firebase/messaging';
import NativeNotification from '../../notificationsUtils';
import {
  PushNotificationOptions,
  NotificationChannel,
} from '../../notificationsUtils/types';
import {
  Notification,
  RemoteMessage,
} from './types';

export class Notifications {
  static configure(options: PushNotificationOptions) {
    NativeNotification.configure(options);
  }

  static createNotificationsChannels = async (channels: readonly NotificationChannel[]) => {
    NativeNotification.createNotificationsChannels(channels);
  };

  static setBadgeCount(num: number) {
    NativeNotification.setBadgeCount(num);
  }

  static deleteToken() {
    messaging().deleteToken();
  }

  static hasPermission() {
    return messaging().hasPermission();
  }

  static onNotificationOpenedApp = (cb: (notification: RemoteMessage) => void) => {
    messaging().onNotificationOpenedApp((not) => cb(RemoteMessage.fromFirebase(not)));
  };

  static getToken() {
    return messaging().getToken();
  }

  static requestPermission() {
    messaging().requestPermission();
  }

  static onTokenRefresh(cb: (token: string) => void) {
    messaging().onTokenRefresh(cb);
  }

  static subscribeToTopic(topic: string) {
    messaging().subscribeToTopic(topic);
  }

  static unsubscribeFromTopic(topic: string) {
    messaging().unsubscribeFromTopic(topic);
  }

  static getInitialNotification = async (): Promise<RemoteMessage | undefined> => {
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification) {
      return RemoteMessage.fromFirebase(initialNotification);
    }
    return Promise.resolve(undefined);
  };

  static onMessage(cb: (notification: RemoteMessage) => Promise<any>) {
    return messaging().onMessage((_notification) => cb(RemoteMessage.fromFirebase(_notification)));
  }

  static setBackgroundMessageHandler(cb: (notification: RemoteMessage) => Promise<any>) {
    messaging().setBackgroundMessageHandler((_notification) => cb(RemoteMessage.fromFirebase(_notification)));
  }
}

export {
  RemoteMessage,
  Notification,
};
