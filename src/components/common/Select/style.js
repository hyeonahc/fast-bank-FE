import styled from 'styled-components'
import arrowDown from '@/assets/images/arrow-down.png'

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.sharedValue.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.text};
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url(${arrowDown}) no-repeat 97% 50%;
  background-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  div {
    color: #757575;
  }
`
