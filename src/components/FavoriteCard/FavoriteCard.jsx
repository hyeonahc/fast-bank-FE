import * as S from './style'
import React, { useState } from 'react'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'
import { ProductDetailModal } from '../ProductCard'
import { useLocation } from 'react-router-dom'

function FavoriteCard({ item, onChangeCheck }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState()
  const location = useLocation()

  return (
    <S.ProductCardWrapper>
      <S.ProductCard
        value={item.type}
        onClick={() => {
          setModalOpen(true)
          setCardData(item.id)
        }}
      >
        {location.pathname === '/cart' ? (
          <label
            className="chk-container"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <input type="checkbox" value={item.id} onChange={onChangeCheck} />
            <span className="chk-mark"></span>
          </label>
        ) : null}
        <h2>{item.title}</h2>
        <h3>{item.content}</h3>

        <FavoriteButton item={item} />
      </S.ProductCard>

      {modalOpen === true ? (
        <ProductDetailModal setModalOpen={setModalOpen} cardData={cardData} />
      ) : null}
    </S.ProductCardWrapper>
  )
}

export default FavoriteCard
