import { Outlet } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import data from '@/components/ProductCard/data'
const AllProductsPage = () => {
  return (
    <>
      <ProductCard dataList={data} checkedList={true}/>
    </>
  )
}

export default AllProductsPage
