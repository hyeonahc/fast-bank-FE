import { useNavigate } from 'react-router-dom'
import ButtonStyled from '@/components/common/Button/ButtonText'
import * as S from './style'

const SuccessModal = ({
  title,
  buttonText,
  displaySuccessModal,
  setDisplaySuccessModal,
}) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    setDisplaySuccessModal(true)
    navigate('/signin')
  }

  return (
    <S.SuccessModalBackground>
      <S.SuccessModal
        style={{ display: displaySuccessModal ? 'flex' : 'none' }}
      >
        <h2>{title} 🙂</h2>
        <ButtonStyled onClick={onClickHandler} buttonText={buttonText} />
      </S.SuccessModal>
    </S.SuccessModalBackground>
  )
}

export default SuccessModal
