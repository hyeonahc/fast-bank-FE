import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.5em 1.75em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
`
