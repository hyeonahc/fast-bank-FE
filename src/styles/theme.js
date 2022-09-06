import { css } from 'styled-components'

const colors = {
  primary: '#2EB5AA',
  heart: '#F8496E',
  error: '#FF6347',
  text: '#181C24',
  textSecond: '#ffffff',
  modalBackground: 'rgba(24, 28, 36, 0.2)',
  inputPlaceholder: '#91959C',
  inputBorder: '#DDDDDD',
  cardPink: '#F2908C',
  cardOrange: '#FAA94F',
  cardBlue: '#4F76CC',
  white: '#FFFFFF',
  cardHover: 'rgba(255, 255, 255, 0.3)',
}

const fontSize = {
  extraSmall: '1.2rem',
  small: '1.4rem',
  regular: '1.6rem',
  big: '2rem',
  extraBig: '2.4rem',
}

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
}

const sharedValue = {
  borderRadius: '8px',
}

const common = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexCenterColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  transformCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  transformCenterY: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4rem;
    width: calc(100% - 8rem);
  `,
  errorMessage: css`
    color: #ff6347;
    font-size: 1.2rem;
    height: 1.5rem;
  `,
  label: css`
    font-weight: 500;
    margin-bottom: 0.5rem;
  `,
}

const widthDevice = {
  default: '414px',
}

const space = {
  marginColumn: '2rem',
  marginRow: '2.2rem',
}

const theme = {
  colors,
  fontSize,
  fontWeight,
  sharedValue,
  common,
  space,
  widthDevice,
}

export default theme
