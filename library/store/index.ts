import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSaga from '../saga/user';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createFilter } from 'redux-persist-transform-filter';

const saveUserLoginSubsetFilter = createFilter('user', ['token']);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  transforms: [saveUserLoginSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor, store };
