import React,
{
  useState,
} from 'react';
import {
  Stores,
} from 'stores';
import {
  StoresContext,
} from 'contexts';
import { useConnections } from 'hooks';

export const StoresProvider: React.FC = (props) => {
  const [rootStore] = useState(new Stores());
  const connections = useConnections();
  rootStore.backend.updateConnections(connections);
  const {
    children,
  } = props;
  return (
    <StoresContext.Provider
      value={{
        stores: rootStore,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};
