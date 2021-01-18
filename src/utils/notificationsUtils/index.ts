import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {
  Platform,
} from 'react-native';
import {
  PushNotificationOptions,
  NotificationChannel,
  AndroidImportance,
  AndroidChannel,
  PresentLocalNotificationDetails,
} from './types';

class NativeNotification {
  static configure = (options: PushNotificationOptions) => {
    PushNotification.configure({
      ...options,
      onNotification: (notification) => {
        if (options.onNotification) {
          options.onNotification(notification);
        }
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  };

  static presentLocalNotification = (data: PresentLocalNotificationDetails) => {
    PushNotification.presentLocalNotification({
      message: data.alertBody,
      title: data.alertTitle,
    });
  };

  static createNotificationsChannels = async (channels: readonly NotificationChannel[]) => {
    try {
      const promises: Promise<void>[] = [];

      channels.forEach(async (item) => {
        PushNotification.channelExists(item.id, (exist: boolean) => {
          if (!exist) {
            const channel = new AndroidChannel(
              item.id,
              item.name,
              item.description,
              AndroidImportance.HIGH,
              item.sound,
            );
            promises.push(new Promise<void>((res) => {
              PushNotification.createChannel(
                channel,
                (created) => {
                  console.log('created ', created);
                  res();
                },
              );
            }));
          }
        });
      });
      await Promise.all(promises);
    } catch (error) {
      // alert('erro_cat ' + JSON.stringify(error));
      console.log('error_cat', error);
    }
  };

  static setBadgeCount(num: number) {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.setApplicationIconBadgeNumber(num);
    } else {
      PushNotification.setApplicationIconBadgeNumber(num);
    }
  }
}

export default NativeNotification;
