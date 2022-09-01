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
    50% {
      color: #8f1d21;
      transform: scale(3);
    }
    100% {
      color: #9b111e;
      transform: none;
    }
  }
`
export default FavoriteButton
