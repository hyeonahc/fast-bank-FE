import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import PageHeading from '@/components/PageHeading'
import { useProductOrderBar } from '@/components/ProductOrderBar/hook'
import ProductOrderBar from '@/components/ProductOrderBar'
import ProductSearchBar from '@/components/ProductSearchBar'
import ProductCardList from '@/components/ProductCardList'

import { useGetProductsQuery } from '@/api/productApi'
import { actIsAuthError } from '@/utils/isAuthError'

const PageContainer = styled.div``

const ProductSearchBarStyled = styled(ProductSearchBar)`
  margin-bottom: 1.6rem;
`
const ProductOrderBarStyled = styled(ProductOrderBar)`
  margin-bottom: 1.6rem;
`

const AllProductsPage = () => {
  const { isLoading, data: dataList } = useGetProductsQuery()
  const [data, setData] = useState(dataList ?? [])
  const [isEmpty, setIsEmpty] = useState(false)
  const navigate = useNavigate()

  const onUpdate = useCallback(
    (isEmpty, isLoading, isFetching, data, error) => {
      if (actIsAuthError(error, navigate)) {
        return
      }

      setIsEmpty(isEmpty)
      if (!isEmpty && data) {
        setData(data)
      }
    },
    [navigate],
  )

  useEffect(() => {
    if (!isEmpty) return

    setData(dataList ?? [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmpty, isLoading])

  const { orderedData, onChangeOrder } = useProductOrderBar(data)

  return (
    <PageContainer>
      <PageHeading>전체 상품</PageHeading>
      <ProductSearchBarStyled onUpdate={onUpdate} />
      <ProductOrderBarStyled onChange={onChangeOrder} />
      <ProductCardList dataList={orderedData} />
    </PageContainer>
  )
}

export default AllProductsPage
