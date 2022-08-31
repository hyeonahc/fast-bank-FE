import { useNavigate } from 'react-router-dom'
import ButtonBased from '@/components/ButtonBased'
import * as S from './style'

const SuccessModal = ({ title, buttonText, displayModal, setDisplayModal }) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    setDisplayModal(true)
    navigate('/signin')
  }

  return (
    <S.SuccessModal style={{ display: displayModal ? 'flex' : 'none' }}>
      <h2>{title}</h2>
      <ButtonBased onClick={onClickHandler} buttonText={buttonText} />
    </S.SuccessModal>
  )
}

export default SuccessModal
