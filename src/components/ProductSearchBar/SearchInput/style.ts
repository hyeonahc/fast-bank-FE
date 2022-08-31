import styled from 'styled-components';
import InputText from '@/components/common/Input/InputText';

type Props = JSX.IntrinsicElements['input'];

export const SearchInput = styled(InputText).attrs<Props>({
  className: '',
})``;
