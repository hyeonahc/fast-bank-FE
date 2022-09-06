import styled from 'styled-components'

export const Button = styled.button`
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sharedValue.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  &:hover {
    cursor: pointer;
  }
`
