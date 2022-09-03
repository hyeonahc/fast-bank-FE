import styled from 'styled-components'

export const Container = styled.div`
  input,
  select {
    display: block;
  }
  p {
    ${({ theme }) => theme.common.ErrorMessage}
  }
`
