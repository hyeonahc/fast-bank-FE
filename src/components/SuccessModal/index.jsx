import ButtonStyled from '@/components/common/Button/ButtonText'
import * as S from './style'

const SuccessModal = ({
  title,
  buttonText,
  displaySuccessModal,
  setDisplaySuccessModal,
  onClickConfirm,
}) => {
  const onClickHandler = () => {
    setDisplaySuccessModal(true)
    onClickConfirm?.()
  }

  return (
    <S.SuccessModalBackground
      style={{ display: displaySuccessModal ? 'block' : 'none' }}
    >
      <S.SuccessModal
        style={{ display: displaySuccessModal ? 'flex' : 'none' }}
      >
        <h2>{title}</h2>
        <ButtonStyled onClick={onClickHandler} buttonText={buttonText} />
      </S.SuccessModal>
    </S.SuccessModalBackground>
  )
}

export default SuccessModal
