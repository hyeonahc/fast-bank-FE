import styled from 'styled-components'
export const ProductCardWrapper = styled.div`
  padding-bottom: 8rem;
`
export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 20rem;
  color: #fff;
  padding: 4rem;
  cursor: pointer;
  background-color: ${({ value }) =>
    value === '예금'
      ? '#1FAB89'
      : value === '적금'
      ? '#62D2A2'
      : value === '대출'
      ? '#91C788'
      : '#52734D'};
  &:not(:first-child) {
    margin-top: 2rem;
  }
  & h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  & h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 2.4rem;
    max-height: 7.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .chk-container {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    top: 0;
    line-height: 1;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
  .chk-mark {
    position: absolute;
    top: 2rem;
    left: 0;
    height: 2rem;
    width: 2rem;
    background-color: #fff;
  }
  .chk-container {
    &:hover input ~ .chk-mark {
      background-color: #fff;
    }
    input:checked ~ .chk-mark {
      background-color: #2196f3;
    }
  }
  .chk-mark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .chk-container {
    input:checked ~ .chk-mark:after {
      display: block;
    }
    .chk-mark:after {
      left: 0.6rem;
      top: 0.2rem;
      width: 0.5rem;
      height: 1rem;
      border: solid white;
      border-width: 0 0.3rem 0.3rem 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
export const ProductDetailModalDimmed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.8);
  z-index: 11;
  max-width: 414px;
`
export const ProductModal = styled.div`
  background: #fff;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  height: 40rem;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 87.1875%;
  padding: 10rem 4rem 4rem;
  span {
    font-size: 1.8rem;
    font-weight: 500;
  }
  & h2 {
    font-size: 2.4rem;
    margin: 1rem 0 3rem;
  }
  & p {
    font-size: 2.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 9rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .btn-cart {
    position: absolute;
    bottom: 4rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 14rem;
    color: #fff;
    background-color: #000;
    height: 4rem;
  }
  & .btn-close {
    padding: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
`
