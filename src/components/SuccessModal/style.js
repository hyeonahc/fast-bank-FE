import styled from 'styled-components'

export const SuccessModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.modalBackground};
  z-index: 11;
  max-width: ${({ theme }) => theme.widthDevice.default};
`

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
