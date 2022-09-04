import styled, { css } from 'styled-components';
import { inputInPage } from '@/styles/mixins';

import Select_ from '@/components/common/Select';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.marginColumn,
}));

export const FilterContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: theme.space.marginRow,
  '> *': {
    flexGrow: 1,
    flexBasis: '100px',
  },
}));

interface SelectProps {
  selectedDefault: boolean;
}

export const Select = styled(Select_)<SelectProps>`
  ${({ theme, selectedDefault }) => css`
    ${inputInPage};
    color: ${selectedDefault
      ? theme.colors.inputPlaceholder
      : theme.colors.text};
  `}
`;

interface OptionProps {
  isDefault: boolean;
}
export const Option = styled.option<OptionProps>(({ theme, isDefault }) => ({
  color: isDefault ? theme.colors.inputPlaceholder : theme.colors.text,
}));
