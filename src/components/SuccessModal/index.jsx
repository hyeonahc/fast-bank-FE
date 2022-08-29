import * as S from './style'

const SuccessModal = ({ title, buttonText, displayModal, setDisplayModal }) => {
  return (
    <S.SuccessModal style={{ display: displayModal ? 'flex' : 'none' }}>
      <h2>{title}</h2>
      <button onClick={() => setDisplayModal(true)}>{buttonText}</button>
    </S.SuccessModal>
  )
}

export default SuccessModal
