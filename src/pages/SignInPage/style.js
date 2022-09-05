import styled from 'styled-components'

export const Container = styled.div`
  .logo-wrapper {
    text-align: center;
    margin-bottom: 2.5rem;
    img {
      width: 20rem;
    }
  }
  .email-wrapper,
  .password-wrapper {
    margin-bottom: 2rem;
    .label {
      ${({ theme }) => theme.common.label};
    }
    .error-message {
      ${({ theme }) => theme.common.errorMessage};
    }
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
  .button-wrapper {
    margin-bottom: 1rem;
  }
`
