declare type Dispatch = typeof import('./store').store.dispatch;
declare type Store = ReturnType<typeof import('./store').reducers>;
declare type RootState = ReturnType<typeof import('./store').getState>;