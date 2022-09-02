import {
  addFavorite,
  deleteFavorite,
  useFavorite,
} from '@/modules/favoriteSlice'
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import { useMemo } from 'react'
import styled from 'styled-components'

function FavoriteButton({ item }) {
  const { dispatch, favorite } = useFavorite()

  const isFavorite = useMemo(() =>
    favorite?.some((element) => element.id === item.id),
  )

  return (
    <Heart>
      {isFavorite ? (
        <Favorite
          className="favorite-btn"
          onClick={(e) => {
            dispatch(deleteFavorite(item))
            e.stopPropagation()
          }}
        />
      ) : (
        <FavoriteBorderOutlined
          className="favorite-btn"
          onClick={(e) => {
            dispatch(addFavorite(item))
            e.stopPropagation()
          }}
        />
      )}
    </Heart>
  )
}

const Heart = styled.button`
  .favorite-btn {
    color: aliceblue;
    font-size: 32px;
    cursor: pointer;
  }

  .favorite-btn:hover {
    will-change: transform;
    animation: heartBeat 1s linear infinite;
  }

  @keyframes heartBeat {
    0% {
      color: aliceblue;
      transform: none;
    }
    25% {
      color: #ff0000;
      transform: scale(1.5);
    }
    50% {
      color: #ff6600;
      transform: scale(2.5);
    }
    75% {
      color: #ff0000;
      transform: scale(1.5);
    }
    100% {
      color: aliceblue;
      transform: none;
    }
  }
`
export default FavoriteButton
