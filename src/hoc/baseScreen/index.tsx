import {
  observer,
} from 'mobx-react';
import React from 'react';

export function baseScreen<Props>(Component: React.FC<Props>) {
  const BaseScreen: React.FC<Props> = observer((props) => {
    const ObserverComponent = observer(Component);
    return (
      <ObserverComponent
        {...props}
      />
    );
  });
  return BaseScreen;
}
