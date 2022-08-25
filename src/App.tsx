import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '@/modules';
import pagesPath from '@/pages/pagesPath';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AllProductsPage from './pages/AllProductsPage';
import PersonalProductsPage from './pages/PersonalProductsPage';
import FavoriteProductsPage from './pages/FavoriteProductsPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={pagesPath.home} element={<HomePage />} />
          <Route path={pagesPath.signin} element={<SignInPage />} />
          <Route path={pagesPath.signup} element={<SignUpPage />} />
          <Route path={pagesPath.products} element={<AllProductsPage />}>
            <Route
              path={pagesPath.personal}
              element={<PersonalProductsPage />}
            ></Route>
            <Route
              path={pagesPath.favorite}
              element={<FavoriteProductsPage />}
            ></Route>
          </Route>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
