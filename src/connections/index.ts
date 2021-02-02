import { 
  ExtendedAxios,
} from 'utils';
import {
  backendAxiosFactory,
} from './backend';

export class Connections {
  backend: ExtendedAxios;

  constructor() {
    this.backend = backendAxiosFactory();
  }
}

export * from './types';
