import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

/**
 * @constant Object Initial state of App
 */
const _state = {
  theme: 'dark',
};

export function ContextWrapper({ children }) {
  // not required imo
  const [sharedState, setSharedState] = useState(_state);

  /**
   * setState
   * @param {string} key
   * @param {any} data
   * @returns
   */
  const setState = (key, data) => {
    setSharedState({
      ...sharedState,
      [key]: data,
    });
  };

  return (
    <AppContext.Provider
      // * soon sharedState and setSharedState will be removed
      // * recommand not to use sharedState and setSharedState
      value={{ sharedState, setSharedState, state: sharedState, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
