import FavoriteCard from '@/components/FavoriteCard'
import { ProductDetailModal } from '@/components/ProductCardList'
import { useFavorite } from '@/modules/favoriteSlice'
import { useState } from 'react'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()
  console.log(favorite)

  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState()

  return (
    // <>
    //   {favorite.length === 0 ? (
    //     <h2>관심상품을 추가하세요 ~</h2>
    //   ) : (
    //     <ProductCardList dataList={favorite} />
    //   )}
    // </>
    <>
      <h1>찜한 상품</h1>
      {favorite.length === 0 ? (
        <h2>찜한 상품이 없습니다</h2>
      ) : (
        favorite &&
        favorite.map((item) => (
          <FavoriteCard
            key={item.id}
            product={item}
            setModalOpen={setModalOpen}
            setCardData={setCardData}
          />
        ))
      )}

      {modalOpen && (
        <ProductDetailModal setModalOpen={setModalOpen} cardData={cardData} />
      )}
    </>
  )
}

export default FavoriteProductsPage
