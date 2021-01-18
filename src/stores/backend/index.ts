import {
  Connections,
} from 'connections';
import {
  Stores,
} from '..';

export class BackendStores {
  connections: Connections;

  constructor(
    public parent: Stores,
  ) { }

  hydrate() {
    return Promise.all([
      
    ]);
  }

  updateConnections(connections: Connections) {
    this.connections = connections;
  }
}
