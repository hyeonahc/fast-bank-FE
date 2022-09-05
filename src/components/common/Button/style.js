import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sharedValue.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  &:hover {
    cursor: pointer;
  }
`
