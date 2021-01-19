import {
  Connections,
} from 'connections';
import {
  Stores,
} from '..';
import { MovieStore } from './movies';

export class BackendStores {
  connections: Connections;

  movies = new MovieStore(this);  

  constructor(
    public parent: Stores,
  ) { }

  hydrate() {
    return Promise.all([
      this.movies.hydrate(),
    ]);
  }

  updateConnections(connections: Connections) {
    this.connections = connections;
    this.movies.connections = connections;
  }
}
