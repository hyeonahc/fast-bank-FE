import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.transformCenterY};
  .logo-wrapper {
    text-align: center;
    margin-bottom: 2.5rem;
    img {
      width: 20rem;
    }
  }
  .input-wrapper {
    margin-bottom: 1rem;
    .label {
      ${({ theme }) => theme.common.label};
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
  .error-message {
    ${({ theme }) => theme.common.errorMessage};
  }
`
