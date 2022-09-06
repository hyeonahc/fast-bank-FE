import { addFav, deleteFav, useFavorite } from '@/modules/favoriteSlice'
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import { useMemo } from 'react'
import styled from 'styled-components'

function FavoriteButton({ item }) {
  const { dispatch, wishList } = useFavorite()

  const isWishList = useMemo(
    () => wishList.wishList?.some((element) => element.id === item.id),
    [item.id, wishList.wishList],
  )

  return (
    <Heart>
      {isWishList ? (
        <Favorite
          className="favorite-btn"
          onClick={(e) => {
            dispatch(deleteFav(item))
            e.stopPropagation()
          }}
        />
      ) : (
        <FavoriteBorderOutlined
          className="favorite-btn"
          onClick={(e) => {
            dispatch(addFav(item))
            e.stopPropagation()
          }}
        />
      )}
    </Heart>
  )
}

const Heart = styled.button`
  .favorite-btn {
    color: #f8496e;
    font-size: 32px;
    cursor: pointer;
  }

  .favorite-btn:hover {
    will-change: transform;
    animation: heartBeat 1s linear infinite;
  }

  @keyframes heartBeat {
    0% {
      color: #f8496e;
      transform: none;
    }
    25% {
      color: #ff6347;
      transform: scale(1.5);
    }
    50% {
      color: #f2908c;
      transform: scale(2.5);
    }
    75% {
      color: #ff6347;
      transform: scale(1.5);
    }
    100% {
      color: #f8496e;
      transform: none;
    }
  }
`
export default FavoriteButton
