import React from 'react';
export function createCtxWithReducer<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const stateCtx = React.createContext(initialState);
  const dispatchCtx = React.createContext(defaultDispatch);
  function useStateCtx<K extends keyof StateType>(property: K) {
    const state = React.useContext(stateCtx);
    if (state === undefined) {
      throw new Error('useCountState must be used within a CountProvider');
    }
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    const context = React.useContext(dispatchCtx);
    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider');
    }
    return context;
  }

  function Provider({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }
  // return [ctx, Provider] as const;
  return [useStateCtx, useDispatchCtx, Provider] as const;
}

// create context with no upfront defaultValue
// without having to do undefined check all the time
export function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}
