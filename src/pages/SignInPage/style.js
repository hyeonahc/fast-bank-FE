import styled from 'styled-components'

export const Container = styled.div`
  .logo-wrapper {
    text-align: center;
    img {
      width: 20rem;
    }
  }
  .label {
    ${({ theme }) => theme.common.label}
  }
  input,
  select {
    display: block;
  }
  .error-message {
    ${({ theme }) => theme.common.errorMessage}
  }
`
