import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from '@/api/cartApi';
import { searchApi } from '@/api/searchApi';
import { productApi } from '@/api/productApi';
import favoriteSlice from './favoriteSlice';
import user from './user';

const rootReducer = combineReducers({
  [cartApi.reducerPath]: cartApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  favorite: favoriteSlice.reducer,
  user,
  [productApi.reducerPath]: productApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartApi.middleware,
      searchApi.middleware,
      productApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
