import styled from 'styled-components'

export const BottomNavigator = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 1;
  height: 80px;
  border-top: 1px solid #ddd;
  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    & li {
      width: 25%;
      background: #fff;
      color: #000;
      font-size: 16px;
      height: 100%;
      & button {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
      }
    }
  }
`
