import { useNavigate } from 'react-router-dom'
import ButtonText from '@/components/common/Button/ButtonText'
import * as S from './style'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다 😥</h2>
      <ButtonText onClick={() => navigate('/')} buttonText="홈으로" />
    </S.Container>
  )
}

export default NotFound
