import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
