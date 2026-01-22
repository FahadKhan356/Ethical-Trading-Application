import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import RootReducer from '../Store';
import {configureStore} from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root-V2',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};

export type AppDispatch = typeof store.dispatch;
