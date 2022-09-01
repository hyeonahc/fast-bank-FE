import styled from 'styled-components'

import Logo from '@/components/Logo'
import ProductOrderBar from '@/components/ProductOrderBar'
import ProductSearchBar from '@/components/ProductSearchBar'
import ProductCard from '@/components/ProductCard'
import PageHeading from '@/components/PageHeading'

import data from '@/components/ProductCard/data'

const PageContainer = styled.div``

const ProductSearchBarStyled = styled(ProductSearchBar)`
  margin-bottom: 1.6rem;
`
const ProductOrderBarStyled = styled(ProductOrderBar)`
  margin-bottom: 1.6rem;
`

const AllProductsPage = () => {
  const onUpdate = (isEmpty, isLoading, data, error) => {}

  return (
    <PageContainer>
      <Logo />
      <PageHeading>전체 상품</PageHeading>
      <ProductSearchBarStyled onUpdate={onUpdate} />
      <ProductOrderBarStyled />
      <ProductCard dataList={data} checkedList={true} />
    </PageContainer>
  )
}

export default AllProductsPage
