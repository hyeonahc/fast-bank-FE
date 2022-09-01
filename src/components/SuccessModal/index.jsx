import { useNavigate } from 'react-router-dom'
import ButtonText from '@/components/common/Button/ButtonText'
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
    <S.SuccessModal style={{ display: displaySuccessModal ? 'flex' : 'none' }}>
      <h2>{title}</h2>
      <ButtonText onClick={onClickHandler} buttonText={buttonText} />
    </S.SuccessModal>
  )
}

export default SuccessModal
