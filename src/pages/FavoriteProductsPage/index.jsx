import ProductCardList from '@/components/ProductCardList'
import { addFav, getFav, useFavorite } from '@/modules/favoriteSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()
  // console.log(favorite)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(dispatch(getFav()))
  }, [dispatch])

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
