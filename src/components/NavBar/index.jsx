import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to="/products">전체상품</Link>
      <Link to="/products/personal">맞춤형 상품</Link>
      <Link to="/products/favorite">관심있는 상품</Link>
    </>
  )
}

export default NavBar
