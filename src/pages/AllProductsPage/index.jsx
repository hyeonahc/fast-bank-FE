import { useState } from 'react'
import styled from 'styled-components'

import Logo from '@/components/Logo'
import ProductOrderBar from '@/components/ProductOrderBar'
import ProductSearchBar from '@/components/ProductSearchBar'
import ProductCard from '@/components/ProductCardList'
import PageHeading from '@/components/PageHeading'

import { OrderType } from '@/constants/orderBar'

import dummyData from '@/components/ProductCardList/data'
import { useProductOrderBar } from '@/components/ProductOrderBar/hook'

const PageContainer = styled.div``

const ProductSearchBarStyled = styled(ProductSearchBar)`
  margin-bottom: 1.6rem;
`
const ProductOrderBarStyled = styled(ProductOrderBar)`
  margin-bottom: 1.6rem;
`

const AllProductsPage = () => {
  const [data, setData] = useState(dummyData)

  const onUpdate = (isEmpty, isLoading, isFetching, data, error) => {
    if (isEmpty) {
      setData(dummyData)
    } else if (data) {
      setData(data)
    }
  }

  const { orderedData, onChangeOrder } = useProductOrderBar(data)

  return (
    <PageContainer>
      <Logo />
      <PageHeading>전체 상품</PageHeading>
      <ProductSearchBarStyled onUpdate={onUpdate} />
      <ProductOrderBarStyled onChange={onChangeOrder} />
      <ProductCard dataList={orderedData} />
    </PageContainer>
  )
}

export default AllProductsPage
