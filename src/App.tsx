import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from '@/modules';

import HomePage from '@/pages/HomePage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

import RequireAuth from '@/pages/RequireAuth';
import AllProductsPage from '@/pages/AllProductsPage';
import PersonalProductsPage from '@/pages/PersonalProductsPage';
import FavoriteProductsPage from '@/pages/FavoriteProductsPage';
import CartPage from '@/pages/CartPage';

import NotFound from '@/pages/NotFound';

import pagesPath from '@/pages/pagesPath';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path={pagesPath.signin} element={<SignInPage />} />
            <Route path={pagesPath.signup} element={<SignUpPage />} />
          </Route>
          <Route path="/" element={<RequireAuth />}>
            <Route index element={<HomePage />} />
            <Route path={pagesPath.products}>
              <Route index element={<AllProductsPage />} />
              <Route
                path={pagesPath.personal}
                element={<PersonalProductsPage />}
              />
              <Route
                path={pagesPath.favorite}
                element={<FavoriteProductsPage />}
              />
            </Route>
            <Route path={pagesPath.cart} element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
