import * as S from './style'
import ButtonText from '@/components/common/Button/ButtonText'
import { FavoriteBorderOutlined, Cancel } from '@material-ui/icons'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'

const ProductCard = ({ dataList, checkedList, onChangeCheck }) => {
  const materialStyle = { color: 'white', fontSize: '30px' }
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState()
  const location = useLocation()
  return (
    <S.ProductCardWrapper>
      {dataList.map((data) => (
        <S.ProductCard
          key={data.id}
          value={data.type}
          onClick={() => {
            setModalOpen(true)
            setCardData(data)
          }}
        >
          {location.pathname === '/cart' ? (
            <label
              className="chk-container"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <input type="checkbox" value={data.id} onChange={onChangeCheck} />
              <span className="chk-mark"></span>
            </label>
          ) : null}
          <h2>{data.title}</h2>
          <h3>{data.content}</h3>

          <FavoriteButton item={data} />
        </S.ProductCard>
      ))}
      {modalOpen === true ? (
        <ProductDetailModal setModalOpen={setModalOpen} cardData={cardData} />
      ) : null}
    </S.ProductCardWrapper>
  )
}
export function ProductDetailModal({ setModalOpen, cardData }) {
  const materialStyle = { color: 'black', fontSize: '3rem' }
  return (
    <S.ProductDetailModalDimmed>
      <S.ProductModal>
        <span>{cardData.type}</span>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
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
