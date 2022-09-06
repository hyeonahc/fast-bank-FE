import { useState } from 'react'
import PropTypes from 'prop-types'
import { Close } from '@material-ui/icons'
import ButtonText from '@/components/common/Button/ButtonText'
import ButtonFilled from '@/components/common/Button/ButtonFilled'
import FavoriteButton from '@/components/common/FavoriteButton/FavoriteButton'
import * as S from './style'

import cardImg1 from '@/assets/images/card-1.png'
import cardImg2 from '@/assets/images/card-2.png'
import cardImg3 from '@/assets/images/card-3.png'
import cardImg4 from '@/assets/images/card-4.png'
import cardImg5 from '@/assets/images/card-5.png'
import cardImg6 from '@/assets/images/card-6.png'
import cardImg7 from '@/assets/images/card-7.png'
import cardImg8 from '@/assets/images/card-8.png'
import cardImg9 from '@/assets/images/card-9.png'
import cardImg10 from '@/assets/images/card-10.png'
import cardImg11 from '@/assets/images/card-11.png'
import cardImg12 from '@/assets/images/card-12.png'
import cardImg13 from '@/assets/images/card-13.png'
import cardImg14 from '@/assets/images/card-14.png'
import cardImg15 from '@/assets/images/card-15.png'
import cardImg16 from '@/assets/images/card-16.png'
import cardImg17 from '@/assets/images/card-17.png'
import cardImg18 from '@/assets/images/card-18.png'
import cardImg19 from '@/assets/images/card-19.png'
import cardImg20 from '@/assets/images/card-20.png'

const ProductCardList = ({
  className,
  dataList,
  checkedList,
  onChangeCheck,
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState()
  return (
    <S.ProductCardWrapper className={className}>
      {dataList &&
        dataList.map((product, idx) => (
          <S.ProductCard
            key={product.id}
            value={product.type}
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
                  checked={checkedList[idx]}
                  onChange={onChangeCheck}
                />
                <span className="chk-mark"></span>
              </label>
            ) : null}
            <h2>{product.type}</h2>
            <h3>{product.name}</h3>
            <span className="card-open">자세히 보기</span>
            {product.name === 'Hey Young 머니박스' ? (
              <img
                src={cardImg1}
                className="card-ico card-ico01"
                alt="card-icon"
              />
            ) : product.name === 'fast 편한 정기 예금' ? (
              <img
                src={cardImg2}
                className="card-ico card-ico02"
                alt="card-icon"
              />
            ) : product.name === 'fast 예금통' ? (
              <img
                src={cardImg3}
                className="card-ico card-ico03"
                alt="card-icon"
              />
            ) : product.name === '청소년 통장' ? (
              <img
                src={cardImg4}
                className="card-ico card-ico04"
                alt="card-icon"
              />
            ) : product.name === 'fast만 해' ? (
              <img
                src={cardImg5}
                className="card-ico card-ico05"
                alt="card-icon"
              />
            ) : product.name === '아름다운 용기 적금' ? (
              <img
                src={cardImg6}
                className="card-ico card-ico06"
                alt="card-icon"
              />
            ) : product.name === 'fast ONE 적금' ? (
              <img
                src={cardImg7}
                className="card-ico card-ico07"
                alt="card-icon"
              />
            ) : product.name === 'fast 직장인든든 상용대출' ? (
              <img
                src={cardImg8}
                className="card-ico card-ico08"
                alt="card-icon"
              />
            ) : product.name === '버팀목 전세자금 대출' ? (
              <img
                src={cardImg9}
                className="card-ico card-ico09"
                alt="card-icon"
              />
            ) : product.name === '대학생을 위한 학자금대출' ? (
              <img
                src={cardImg10}
                className="card-ico card-ico10"
                alt="card-icon"
              />
            ) : product.name === '내집마련대출' ? (
              <img
                src={cardImg11}
                className="card-ico card-ico11"
                alt="card-icon"
              />
            ) : product.name === '우리 아이 꿈 쌓기 적금' ? (
              <img
                src={cardImg12}
                className="card-ico card-ico12"
                alt="card-icon"
              />
            ) : product.name === '달러만예금' ? (
              <img
                src={cardImg13}
                className="card-ico card-ico13"
                alt="card-icon"
              />
            ) : product.name === '희망대한민국 햇살론' ? (
              <img
                src={cardImg14}
                className="card-ico card-ico14"
                alt="card-icon"
              />
            ) : product.name === '티끌모아태산 적금' ? (
              <img
                src={cardImg15}
                className="card-ico card-ico15"
                alt="card-icon"
              />
            ) : product.name === '힘내라 대한민국 청년대출' ? (
              <img
                src={cardImg16}
                className="card-ico card-ico16"
                alt="card-icon"
              />
            ) : product.name === '국민주택청약저축' ? (
              <img
                src={cardImg17}
                className="card-ico card-ico17"
                alt="card-icon"
              />
            ) : product.name === '스위프트 예금' ? (
              <img
                src={cardImg18}
                className="card-ico card-ico18"
                alt="card-icon"
              />
            ) : product.name === '다시는 없을 예금상품' ? (
              <img
                src={cardImg19}
                className="card-ico card-ico19"
                alt="card-icon"
              />
            ) : product.name === '여행자금저축적금' ? (
              <img
                src={cardImg20}
                className="card-ico card-ico20"
                alt="card-icon"
              />
            ) : null}
            <FavoriteButton item={product} />
            <div className="card-cover"></div>
          </S.ProductCard>
        ))}
      {modalOpen && (
        <ProductDetailModal setModalOpen={setModalOpen} cardData={cardData} />
      )}
    </S.ProductCardWrapper>
  )
}

ProductCardList.defaultProps = {
  className: undefined,
  checkedList: undefined,
  onChangeCheck: undefined,
}

ProductCardList.propTypes = {
  className: PropTypes.string,
  dataList: PropTypes.array.isRequired,
  checkedList: PropTypes.array,
  onChangeCheck: PropTypes.func,
}

export function ProductDetailModal({ setModalOpen, cardData }) {
  const materialStyle = { color: '#91959C', fontSize: '1.715rem' }
  return (
    <S.ProductDetailModalDimmed>
      <S.ProductModal>
        <span>{cardData.type}</span>
        <h2>{cardData.name}</h2>
        <p>{cardData.content}</p>
        <ButtonFilled className="btn-cart">장바구니 담기</ButtonFilled>
        <ButtonText
          onClick={() => {
            setModalOpen(false)
          }}
          className="btn-close"
          buttonText={<Close style={materialStyle} />}
        />
      </S.ProductModal>
    </S.ProductDetailModalDimmed>
  )
}

export default ProductCardList
