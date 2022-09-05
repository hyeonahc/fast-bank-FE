import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.extraBig};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-bottom: 3rem;
  }
`
