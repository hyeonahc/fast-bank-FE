import styled from 'styled-components'

export const SuccessModal = styled.div`
  ${({ theme }) => theme.common.transformCenter};
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ddd;
  width: 40vw;
  height: 25vh;
  text-align: center;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.big};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: 1.5rem;
  }
`
