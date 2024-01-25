import rootReducer from "../reducers/rootReducer";

export interface CounterState {
    count: number;
  }

  export type RootState = ReturnType<typeof rootReducer>;