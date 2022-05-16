import { createContext, useReducer, useContext } from "react";
import { COLLAPSE_MENU } from "types";

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);

// global reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case COLLAPSE_MENU:
      return {
        ...state,
        collapse: action.collapse,
      };

    default:
      throw new Error(`Unhandeled action type: ${action.type}`);
  }
};

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(globalReducer, {
    collapse: false,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
