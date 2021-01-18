import {
  utils,
} from '@react-native-firebase/app';
import {
  PlayServicesAvailability,
} from './types';

export class Utils {
  static playServicesAvailability: PlayServicesAvailability = utils().playServicesAvailability;
}
