import { css } from 'styled-components'

const colors = {}

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

const theme = {
  colors,
  common,
}

export default theme
