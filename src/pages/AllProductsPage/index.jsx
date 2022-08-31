import { Outlet } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
const AllProductsPage = () => {
  return (
    <>
      <ProductCard />
      <Outlet />
    </>
  )
}

export default AllProductsPage
