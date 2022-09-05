import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.extraBig};
    text-align: center;
  }
  .label {
    ${({ theme }) => theme.common.label};
  }
`
