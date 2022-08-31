import * as S from './style'
import ButtonText from '@/components/common/Button/ButtonText'
import { Favorite, FavoriteBorderOutlined, Cancel } from '@material-ui/icons'
import { useState } from 'react'
import productData from './data'

const ProductCard = () => {
  const materialStyle = { color: 'white', fontSize: '30px' }
  const [card] = useState(productData)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <S.ProductCardWrapper>
      {card.map((array, i) => (
        <S.ProductCard
          key={i}
          value={productData[i].type}
          onClick={() => {
            setModalOpen(true)
          }}
        >
          <h2>{card[i].title}</h2>
          <h3>{card[i].content}</h3>
          <ButtonText
            onClick={(e) => {
              e.stopPropagation()
            }}
            buttonText={<FavoriteBorderOutlined style={materialStyle} />}
          />
        </S.ProductCard>
      ))}
      {modalOpen === true ? (
        <ProductDetailModal card={card} setModalOpen={setModalOpen} />
      ) : null}
    </S.ProductCardWrapper>
  )
}
export const ProductDetailModal = ({ card, setModalOpen }) => {
  const materialStyle = { color: 'black', fontSize: '3rem' }
  return (
    <S.ProductDetailModalDimmed>
      <S.ProductModal card={card}>
        <span>{card[0].type}</span>
        <h2>{card[0].title}</h2>
        <p>{card[0].content}</p>
        <ButtonText className="btn-cart" buttonText="장바구니 담기" />
        <ButtonText
          onClick={() => {
            setModalOpen(false)
          }}
          className="btn-close"
          buttonText={<Cancel style={materialStyle} />}
        />
      </S.ProductModal>
    </S.ProductDetailModalDimmed>
  )
}
export default ProductCard
