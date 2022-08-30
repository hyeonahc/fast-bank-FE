import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';

export const CartListHeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const CheckboxLabel = styled.label({
  flexGrow: 0,
});

export const Checkbox = styled(Input)({});

export const RemoveButton = styled(Button)({});
