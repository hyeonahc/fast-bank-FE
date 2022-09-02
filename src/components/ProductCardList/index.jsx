import * as S from './style'
import ButtonText from '@/components/common/Button/ButtonText'
import { Cancel } from '@material-ui/icons'
import { useState } from 'react'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'
import { useGetProductsQuery } from '@/api/productApi'

const ProductCard = ({ dataList, checkedList, onChangeCheck }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState()
  const { data: productsList, isLoading, isError } = useGetProductsQuery()
  if (isLoading) {
    return console.log('loading..')
  }
  if (isError) {
    return console.log('error')
  }
  return (
    <S.ProductCardWrapper>
      {productsList.products.map((product) => (
        <S.ProductCard
          key={product.id}
          value={product.category}
          onClick={() => {
            setModalOpen(true)
            setCardData(product)
          }}
        >
          {checkedList ? (
            <label
              className="chk-container"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <input
                type="checkbox"
                value={product.id}
                onChange={onChangeCheck}
              />
              <span className="chk-mark"></span>
            </label>
          ) : null}
          <h2>{product.category}</h2>
          <h3>{product.name}</h3>

          <FavoriteButton item={product} />
        </S.ProductCard>
      ))}
      {modalOpen && (
        <ProductDetailModal setModalOpen={setModalOpen} cardData={cardData} />
      )}
    </S.ProductCardWrapper>
  )
}
export function ProductDetailModal({ setModalOpen, cardData }) {
  const materialStyle = { color: 'black', fontSize: '3rem' }
  return (
    <S.ProductDetailModalDimmed>
      <S.ProductModal>
        <span>{cardData.category}</span>
        <h2>{cardData.name}</h2>
        <p>{cardData.description}</p>
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
