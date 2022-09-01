import * as S from './style'
import React, { useState } from 'react'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'
import { ProductDetailModal } from '../ProductCard'
import productData from '../ProductCard/data'

function FavoriteCard({ item }) {
  const [card] = useState(productData)
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState(0)
  return (
    <S.ProductCardWrapper>
      <S.ProductCard
        value={item.type}
        onClick={() => {
          setModalOpen(true)
          setCardData(item.id)
        }}
      >
        <h2>{item.title}</h2>
        <h3>{item.content}</h3>

        <FavoriteButton item={item} />
      </S.ProductCard>

      {modalOpen === true ? (
        <ProductDetailModal
          card={card}
          setModalOpen={setModalOpen}
          cardData={cardData}
        />
      ) : null}
    </S.ProductCardWrapper>
  )
}

export default FavoriteCard
