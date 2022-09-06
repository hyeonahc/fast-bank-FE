import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.transformCenterY};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.extraBig};
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .input-wrapper {
    margin-bottom: 2rem;
    .label {
      ${({ theme }) => theme.common.label};
    }
  }
  .error-message {
    ${({ theme }) => theme.common.errorMessage};
  }
`
