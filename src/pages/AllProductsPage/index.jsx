import styled from 'styled-components'

import Logo from '@/components/Logo'
import ProductOrderBar from '@/components/ProductOrderBar'
import ProductSearchBar from '@/components/ProductSearchBar'
import ProductCard from '@/components/ProductCard'
import PageHeading from '@/components/PageHeading'

import dummyData from '@/components/ProductCard/data'
import { useState } from 'react'

const PageContainer = styled.div``

const ProductSearchBarStyled = styled(ProductSearchBar)`
  margin-bottom: 1.6rem;
`
const ProductOrderBarStyled = styled(ProductOrderBar)`
  margin-bottom: 1.6rem;
`

const AllProductsPage = () => {
  const [data, setData] = useState(dummyData)

  const onUpdate = (isEmpty, isLoading, data, error) => {
    if (isEmpty) {
      setData(dummyData)
    } else {
      setData(data)
    }
  }

  return (
    <PageContainer>
      <Logo />
      <PageHeading>전체 상품</PageHeading>
      <ProductSearchBarStyled onUpdate={onUpdate} />
      <ProductOrderBarStyled />
      <ProductCard dataList={dummyData} />
    </PageContainer>
  )
}

export default AllProductsPage
