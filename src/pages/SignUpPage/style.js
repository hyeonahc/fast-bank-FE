import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  position: relative;
  input,
  select {
    display: block;
  }
  p {
    ${({ theme }) => theme.common.ErrorMessage}
  }
`
