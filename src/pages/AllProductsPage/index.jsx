import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '@/components/Logo'
import ProductOrderBar from '@/components/ProductOrderBar'
import ProductSearchBar from '@/components/ProductSearchBar'
import ProductCardList from '@/components/ProductCardList'
import PageHeading from '@/components/PageHeading'
import { useGetProductsQuery } from '@/api/productApi'
import { useProductOrderBar } from '@/components/ProductOrderBar/hook'

import { actIsAuthError } from '@/utils/isAuthError'

import dummyData from '@/components/ProductCardList/data'

const PageContainer = styled.div``

const ProductSearchBarStyled = styled(ProductSearchBar)`
  margin-bottom: 1.6rem;
`
const ProductOrderBarStyled = styled(ProductOrderBar)`
  margin-bottom: 1.6rem;
`

const AllProductsPage = () => {
  const { data: dataList } = useGetProductsQuery()
  const [data, setData] = useState(dataList)
  const navigate = useNavigate()

  const onUpdate = (isEmpty, isLoading, isFetching, data, error) => {
    if (actIsAuthError(error, navigate)) {
      return
    }

    if (isEmpty) {
      setData(dataList)
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
      <ProductCardList dataList={(orderedData, dataList)} />
    </PageContainer>
  )
}

export default AllProductsPage
