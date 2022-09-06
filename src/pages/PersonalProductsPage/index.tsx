import styled, { css } from 'styled-components';
import PageHeading from '@/components/PageHeading';
import PageDescription from '@/components/PageDescription';

import { useGetPersonalProductsQuery } from '@/api/productCustom';
import LoadingCardSize from '@/components/common/Loading/LoadingCardSize';
import EmptyListCardSize from '@/components/common/EmptyListCardSize';
import * as S from '@/components/CartListTemplate/style';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';
import ProductCardList from '@/components/ProductCardList';

interface Props {}

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
`;

export const PageHeadingStyled = styled(PageHeading)({});

export const PageDescriptionStyled = styled(PageDescription)({});

export const ProductCardListStyled = styled(ProductCardList)({});

const PersonalProductPage = (props: Props) => {
  const { isLoading, data, error } = useGetPersonalProductsQuery(undefined);
  useGoSignUpHasAuthError([error]);

  return (
    <PageContainer>
      <PageHeadingStyled>맞춤형 상품</PageHeadingStyled>
      <PageDescriptionStyled>
        %NAME을 위한 맞춤형 상품입니다
      </PageDescriptionStyled>
      {isLoading ? (
        <LoadingCardSize />
      ) : !data || data.length === 0 ? (
        <EmptyListCardSize>추천된 맞춤형 상품이 없습니다</EmptyListCardSize>
      ) : (
        <ProductCardListStyled dataList={data} />
      )}
    </PageContainer>
  );
};

export default PersonalProductPage;
