const pagesPath = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  products: '/products',
  personal: 'personal',
  favorite: 'favorite',
  cart: '/cart',
}

const pagesFullPath = {
  ...pagesPath,
  personal: `${pagesPath.products}/${pagesPath.personal}`,
  favorite: `${pagesPath.products}/${pagesPath.favorite}`,
}

export default pagesPath
