import ProductCardList from '@/components/ProductCardList'
import { useFavorite } from '@/modules/favoriteSlice'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()
  console.log(favorite)

  return (
    <>
      <h1>찜한 상품</h1>
      {favorite.length === 0 ? (
        <h2>관심상품을 추가하세요 ~</h2>
      ) : (
        <ProductCardList dataList={favorite} />
      )}
    </>
  )
}

export default FavoriteProductsPage
