import { css } from 'styled-components'

const colors = {
  primary: '#1583D8',
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
