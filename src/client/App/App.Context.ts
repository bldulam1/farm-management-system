import { createContext, Dispatch, SetStateAction } from 'react';

export interface AppStateInterface {
  drawerOpen: boolean;
}

export const defaultAppState: AppStateInterface = {
  drawerOpen: false,
};

interface AppContextInterface {
  state: AppStateInterface;
  setState: Dispatch<SetStateAction<AppStateInterface>>;
}

export const AppContext = createContext<AppContextInterface>({
  state: defaultAppState,
  setState: () => {},
});
