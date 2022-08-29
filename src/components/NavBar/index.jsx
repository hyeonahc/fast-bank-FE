import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './style'
import {
  Home,
  HomeOutlined,
  AccountBalanceWallet,
  AccountBalanceWalletOutlined,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from '@material-ui/icons'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const materialStyle = { color: 'teal', fontSize: '40px' }
  return (
    <S.BottomNavigator>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate('/products')
            }}
          >
            {location.pathname === '/products' ? (
              <Home style={materialStyle} />
            ) : (
              <HomeOutlined style={materialStyle} />
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/products/personal')
            }}
          >
            {location.pathname === '/products/personal' ? (
              <AccountBalanceWallet style={materialStyle} />
            ) : (
              <AccountBalanceWalletOutlined style={materialStyle} />
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/products/favorite')
            }}
          >
            {location.pathname === '/products/favorite' ? (
              <Favorite style={materialStyle} />
            ) : (
              <FavoriteBorderOutlined style={materialStyle} />
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/cart')
            }}
          >
            {location.pathname === '/cart' ? (
              <ShoppingCart style={materialStyle} />
            ) : (
              <ShoppingCartOutlined style={materialStyle} />
            )}
          </button>
        </li>
      </ul>
    </S.BottomNavigator>
  )
}

export default NavBar
