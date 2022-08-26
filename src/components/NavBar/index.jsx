import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { FaHome, FaWallet, FaHeart, FaShoppingCart } from 'react-icons/fa'
const IconStyles = { color: '#00B992', fontSize: '2em' }

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <S.BottomNavigator>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate('/products')
            }}
          >
            <FaHome style={IconStyles} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/products/personal')
            }}
          >
            <FaWallet style={IconStyles} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/products/favorite')
            }}
          >
            <FaHeart style={IconStyles} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/cart')
            }}
          >
            <FaShoppingCart style={IconStyles} />
          </button>
        </li>
      </ul>
    </S.BottomNavigator>
  )
}

export default NavBar
