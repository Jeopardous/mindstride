import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
  });
  export const persistor = persistStore(store);

  