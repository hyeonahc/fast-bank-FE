import { useFavorite } from '@/modules/favoriteSlice'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()

  return <div> {favorite.length === 0 ? <h1>관심상품</h1> : favorite}</div>
}

export default FavoriteProductsPage
