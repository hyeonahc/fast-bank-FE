import PageDescription from '@/components/PageDescription'
import PageHeading from '@/components/PageHeading'
import ProductCardList from '@/components/ProductCardList'
import { getFav, useFavorite } from '@/modules/favoriteSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: ${theme.fontSize.regular};
    > * {
      margin-bottom: ${theme.space.marginColumn};
    }
  `}
`
export const HeadingStyled = styled(PageHeading)({})
export const DescriptionStyled = styled(PageDescription)({})

const FavoriteProductsPage = (props) => {
  const { wishList } = useFavorite()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFav())
  }, [dispatch])

  return (
    <PageContainer>
      <HeadingStyled>찜한 상품</HeadingStyled>
      <DescriptionStyled>%NAME님이 좋아하는 상품입니다</DescriptionStyled>
      {wishList.length === 0 ? (
        <h1>관심상품을 추가하세요 ~</h1>
      ) : (
        <ProductCardList dataList={wishList.wishList} />
      )}
    </PageContainer>
  )
}

export default FavoriteProductsPage
