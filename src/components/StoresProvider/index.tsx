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

export const StoresProvider: React.FC = (props) => {
  const [rootStore] = useState(new Stores());
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
