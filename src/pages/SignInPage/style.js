import styled from 'styled-components'

export const Container = styled.div`
  .logo-wrapper {
    text-align: center;
    img {
      width: 20rem;
    }
  }
  .label {
    ${({ theme }) => theme.common.label};
  }
  input,
  select {
    display: block;
  }
  .error-message {
    ${({ theme }) => theme.common.errorMessage};
  }
  .signup-text {
    text-align: right;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
    span {
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }
`
