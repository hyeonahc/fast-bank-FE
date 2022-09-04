import * as S from './style'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'

function FavoriteCard({
  product,
  setModalOpen,
  setCardData,
  checkedList,
  onChangeCheck,
}) {
  return (
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
          <input type="checkbox" value={product.id} onChange={onChangeCheck} />
          <span className="chk-mark"></span>
        </label>
      ) : null}
      <h2>{product.category}</h2>
      <h3>{product.name}</h3>

      <FavoriteButton item={product} />
    </S.ProductCard>
  )
}

export default FavoriteCard
