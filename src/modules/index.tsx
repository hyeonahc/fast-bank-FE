import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from '@/api/searchApi';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: { ...rootReducer, [searchApi.reducerPath]: searchApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);

export default store;
