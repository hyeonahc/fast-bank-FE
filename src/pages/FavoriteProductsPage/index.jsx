import ProductCardList from '@/components/ProductCardList'
import { getFav, useFavorite } from '@/modules/favoriteSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  CartPageContainer,
  CartPageDescription,
  CartPageLabel,
} from '../CartPage'

const FavoriteProductsPage = (props) => {
  const { wishList } = useFavorite()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFav())
  }, [dispatch])

  const { className } = props
  return (
    <CartPageContainer className={className}>
      <CartPageLabel>찜한 상품</CartPageLabel>
      <CartPageDescription>%NAME님이 좋아하는 상품입니다.</CartPageDescription>
      {wishList.length === 0 ? (
        <h2>관심상품을 추가하세요 ~</h2>
      ) : (
        <ProductCardList dataList={wishList.wishList} />
      )}
    </CartPageContainer>
  )
}

export default FavoriteProductsPage
