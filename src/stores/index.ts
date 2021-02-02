import {
  configure,
} from 'mobx';
import {
  BackendStores,
} from './backend';

configure({
  enforceActions: 'always',
});

export class Stores {
  backend = new BackendStores(this);
}
