import { css } from 'styled-components'

const colors = {
  primary: '#2EB5AA',
  heart: '#F8496E',
  error: '#FF6347',
  text: '#181C24',
  modalBackground: 'rgba(24, 28, 36, 0.2)',
  inputPlaceholder: '#91959C',
  inputBorder: '#DDDDDD',
  cardPink: '#F2908C',
  cardOrange: '#FAA94F',
  cardBlue: '#4F76CC',
  cardHover: 'rgba(255, 255, 255, 0.3)',
}

const common = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ErrorMessage: css`
    color: tomato;
    font-size: 0.8rem;
  `,
}

const widthDevice = {
  default: '414px',
}

const theme = {
  colors,
  common,
  widthDevice,
}

export default theme
