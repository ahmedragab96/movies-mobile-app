import {
  Stores,
} from '..';
import {
  LocalizationStore,
} from './localization';

export class UIStores {
  localization = new LocalizationStore(this);

  constructor(
    public parent: Stores,
  ) { }

  hydrate() {
    return Promise.all([
      this.localization.hydrate(),
    ]);
  }
}
