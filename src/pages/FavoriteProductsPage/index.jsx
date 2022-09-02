import ProductCard from '@/components/ProductCardList'
import { useFavorite } from '@/modules/favoriteSlice'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()
  console.log(favorite)

  return (
    <>
      {favorite.length === 0 ? (
        <h2>관심상품을 추가하세요 ~</h2>
      ) : (
        <ProductCard dataList={favorite} />
      )}
    </>
  )
}

export default FavoriteProductsPage
