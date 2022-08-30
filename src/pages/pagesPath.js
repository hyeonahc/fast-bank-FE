const pagesPath = {
  home: '',
  signin: 'signin',
  signup: 'signup',
  products: 'products',
  personal: 'personal',
  favorite: 'favorite',
  cart: 'cart',
}

export const pagesFullPath = {
  signin: `/${pagesPath.signin}`,
  signup: `/${pagesPath.signup}`,
  products: `/${pagesPath.products}`,
  personal: `/${pagesPath.products}/${pagesPath.personal}`,
  favorite: `/${pagesPath.products}/${pagesPath.favorite}`,
  cart: `/${pagesPath.cart}`,
}

export default pagesPath
