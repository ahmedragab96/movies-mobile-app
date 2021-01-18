import {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';

class AndroidNotification {
  constructor(
    public channelId: string,
    public smallIcon: string,
  ) { }
}

class IOSNotification {
  constructor(
    public badge?: string,
  ) { }
}

class NotificationIOS {
  constructor(
    public badgeCount?: number | null,
    public sound?: string,
  ) {}
}
export class Notification {
  constructor(
    public title: string,
    public body: string,
    public data: any,
    public android: AndroidNotification,
    public ios: IOSNotification & NotificationIOS,
  ) { }
}

export class RemoteMessage {
  constructor(
    public clickAction: string,
    public notification: Notification,
    public data: any,
  ) {}

  static fromFirebase(remoteMessage: FirebaseMessagingTypes.RemoteMessage): RemoteMessage {
    const fixedRemoteMessage = remoteMessage as any;
    return new RemoteMessage(
      fixedRemoteMessage.notification.android && fixedRemoteMessage.notification.android.clickAction,
      new Notification(
        fixedRemoteMessage.notification.title,
        fixedRemoteMessage.notification.body,
        fixedRemoteMessage.data,
        new AndroidNotification(
          fixedRemoteMessage.notification.android && fixedRemoteMessage.notification.android.channelId,
          fixedRemoteMessage.notification.android && fixedRemoteMessage.notification.android.smallIcon,
        ),
        new IOSNotification(
          fixedRemoteMessage.notification.ios ? fixedRemoteMessage.notification.ios.badge : undefined,
        ),
      ),
      fixedRemoteMessage.data,
    );
  }
}
