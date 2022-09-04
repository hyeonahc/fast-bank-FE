import styled from 'styled-components';
import InputRadio from '@/components/common/Input/InputRadio';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'nowrap',
  height: '2.4rem',
  '> *': {
    marginRight: '1rem',
  },
});

export const InputRadioStyled = styled(InputRadio)({});

export const Label = styled.label(({ theme }) => ({}));

export const LabelContainer = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.regular,
  color: theme.colors.inputPlaceholder,

  [`${InputRadioStyled}:checked ~ ${Label}`]: {
    color: theme.colors.primary,
  },
}));
