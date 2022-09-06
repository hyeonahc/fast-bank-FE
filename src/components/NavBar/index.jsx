import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './style'
import {
  HomeRounded,
  HomeOutlined,
  AccountBalanceWalletRounded,
  AccountBalanceWalletOutlined,
  FavoriteRounded,
  FavoriteBorderOutlined,
  ShoppingCartRounded,
  ShoppingCartOutlined,
} from '@material-ui/icons'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const materialStyle = { color: '#2EB5AA', fontSize: '4rem' }
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
              <HomeRounded style={materialStyle} />
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
              <AccountBalanceWalletRounded style={materialStyle} />
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
              <FavoriteRounded style={materialStyle} />
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
              <ShoppingCartRounded style={materialStyle} />
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
