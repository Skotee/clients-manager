import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import clientsSlice from './slices/clientsSlice.js';
import reportsSlice from './slices/reportsSlice';
import dataItemsSlice from './slices/dataItemsSlice';

const store = configureStore({
  reducer: {
    clients: clientsSlice,
    reports: reportsSlice,
    dataItems: dataItemsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
