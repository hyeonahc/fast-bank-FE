import styled from 'styled-components'

export const Select = styled.select`
  width: 20rem;
  padding: 0.5rem 0.35rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  /* temporary background image for dropdown arrow */
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  &:hover {
    cursor: pointer;
  }
  div {
    color: #757575;
  }
`
