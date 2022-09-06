import styled from 'styled-components';
import Loading from './';
import { cardSize } from '@/styles/mixins';

const LoadingCardSize = styled(Loading)`
  ${cardSize};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingCardSize;
