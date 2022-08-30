import styled from 'styled-components'

export const SuccessModal = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  border: 1px solid #ddd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 25vh;
  text-align: center;

  h2 {
    margin-bottom: 0.7rem;
  }
`
