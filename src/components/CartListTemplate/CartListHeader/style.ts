import styled from 'styled-components';

import Button from '@/components/common/Button';

export const CartListHeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  justifyContent: 'space-between',
});

export const CheckboxLabel = styled.label({
  flexGrow: 0,
});

export const Checkbox = styled.input.attrs({ type: 'checkbox' })({});

export const RemoveButton = styled(Button)({});
