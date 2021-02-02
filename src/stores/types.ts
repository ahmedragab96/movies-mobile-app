import {
  create,
} from 'mobx-persist';
import {
  makeObservable,
} from 'mobx';
import {
  BackendEntity,
  ListBackendEntity,
  PaginatedListBackendEntity,
} from 'utils';
interface ObservableDriver {
  driverName: string;
}
export class BaseStore {
  observableDrivers: ObservableDriver[] = [];

  makeObservable() {
    return makeObservable(this);
  }

  registerObservableDrivers() {
    Object.getOwnPropertyNames(this).forEach((property) => {
      const propertyVal = (this as any)[property];
      if (
        propertyVal instanceof ListBackendEntity
        || propertyVal instanceof PaginatedListBackendEntity
        || propertyVal instanceof BackendEntity) {
        this.observableDrivers.push({
          driverName: property,
        });
      }
    });
  }
}
