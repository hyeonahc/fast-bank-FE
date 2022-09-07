import styled, { css } from 'styled-components';
import PageHeading from '@/components/PageHeading';
import PageDescription from '@/components/PageDescription';
import LoadingCardSize from '@/components/common/Loading/LoadingCardSize';
import ListEmpty from '@/components/ListEmpty';
import ProductCardList from '@/components/ProductCardList';

import { useGetPersonalProductsQuery } from '@/api/productCustom';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';
import { AccountBalanceWalletOutlined } from '@material-ui/icons';

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
        <ListEmpty
          Icon={AccountBalanceWalletOutlined}
          text="맞춤형 상품이 없습니다"
        />
      ) : (
        <ProductCardListStyled dataList={data} />
      )}
    </PageContainer>
  );
};

export default PersonalProductPage;
