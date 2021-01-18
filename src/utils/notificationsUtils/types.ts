export class PushNotificationOptions {
  onNotification?: (notification: PushNotification) => void;
}

export interface PushNotification {
  foreground: boolean;
  userInteraction: boolean;
  message: string | object;
  data: object;
  subText?: string;
  badge: number;
  alert: object;
  sound: string;
  finish: (fetchResult: string) => void;
}
export class NotificationChannel {
  name: string;

  id: string;

  description: string;

  sound?: string;

  constructor(name: string, id: string, description?: string, sound?: string) {
    this.name = name;
    this.id = id;
    this.description = description as any;
    this.sound = sound;
  }
}

export interface PresentLocalNotificationDetails {
  alertBody: string;
  alertTitle: string;
}

export class AndroidChannel {
  constructor(
    public channelId: string,
    public channelName: string,
    public channelDescription?: string,
    public importance?: AndroidImportance,
    public soundName?: string,
    public vibrate?: boolean,
  ) { }
}
export enum AndroidImportance {
  DEFAULT = 3,
  HIGH = 4,
  LOW = 2,
  MIN = 1,
  NONE = 0
}
