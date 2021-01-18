import {
  observer,
} from 'mobx-react';
import React from 'react';
import {
  useStores,
} from 'hooks';
import {
  AccessDenied,
} from 'screens';
import {
  BaseScreenConfig,
} from './types';

export function baseScreen<Props, Roles extends string>(Component: React.FC<Props>, config: BaseScreenConfig<Roles>) {
  const BaseScreen: React.FC<Props> = observer((props) => {
    const stores = useStores();
    const ObserverComponent = observer(Component);
    if (!config.allowedRoles.includes(stores.backend.users.role as any)) {
      return (
        <AccessDenied />
      );
    }
    return (
      <ObserverComponent
        {...props}
      />
    );
  });
  return BaseScreen;
}

export * from './types';
