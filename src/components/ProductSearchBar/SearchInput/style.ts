import styled from 'styled-components';
import InputText from '@/components/common/Input/InputText';

import { inputInPage } from '@/styles/mixins';

export const SearchInput = styled(InputText)`
  ${inputInPage};
  width: 100%;
`;
