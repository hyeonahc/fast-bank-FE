import FavoriteCard from '@/components/FavoriteCard/FavoriteCard'
import { useFavorite } from '@/modules/favoriteSlice'

const FavoriteProductsPage = () => {
  const { favorite } = useFavorite()
  console.log(favorite)

  return (
    <>
      {favorite.length === 0 ? (
        <h2>관심상품을 추가하세요 ~</h2>
      ) : (
        favorite.map((item, index) => {
          return <FavoriteCard key={index} item={item} />
        })
      )}
    </>
  )
}

export default FavoriteProductsPage
