import styled from 'styled-components'
import { cardSize } from '@/styles/mixins'

export const ProductCardWrapper = styled.div`
  padding-bottom: 8rem;
`
export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${cardSize};
  color: #fff;
  padding: 2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background: ${({ value }) =>
    value === '예금'
      ? '#F2908C'
      : value === '적금'
      ? '#FAA94F'
      : value === '대출'
      ? '#4F76CC'
      : '#52734D'};
  &:not(:first-child) {
    margin-top: 2rem;
  }
  &:hover .card-cover,
  &:visited .card-cover {
    display: block;
  }
  .card-open {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    border: 2px solid #fff;
    border-radius: 0.8rem;
    width: 13rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  & h2 {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 0.7rem;
    font-weight: 500;
    z-index: 1;
  }
  & h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    max-height: 7.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
  }
  & button {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1;
  }
  .card-ico {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    &.card-ico01,
    &.card-ico02,
    &.card-ico03,
    &.card-ico09 {
      width: 9.2rem;
      height: 9.2rem;
    }
    &.card-ico04 {
      width: 9.4rem;
      height: 9.4rem;
    }
    &.card-ico05 {
      width: 11.1rem;
      height: 7.9rem;
    }
    &.card-ico06 {
      width: 9.6rem;
      height: 9.6rem;
    }
    &.card-ico07 {
      width: 10.1rem;
      height: 9.6rem;
    }
    &.card-ico08 {
      width: 13rem;
      height: 10.1rem;
    }
    &.card-ico10 {
      width: 8.4rem;
      height: 8.4rem;
    }
  }
  .card-cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.cardHover};
    display: none;
  }
  .chk-container {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1;
    margin-bottom: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    z-index: 1;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
  .chk-mark {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }
  .chk-container {
    &:hover input ~ .chk-mark {
      background-color: #fff;
    }
    input:checked ~ .chk-mark {
      background: ${({ theme }) => theme.colors.primary};
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
      left: 0.4rem;
      top: 0.1rem;
      width: 0.4rem;
      height: 0.8rem;
      border: solid #fff;
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
  background: ${({ theme }) => theme.colors.modalBackground};
  z-index: 11;
  max-width: ${({ theme }) => theme.widthDevice.default};
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
  height: 25rem;
  width: 83.091787439613527%;
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  & h2 {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0.7rem 0 2rem;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  & .btn-cart {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 15.8rem;
    height: 4.4rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  & .btn-close {
    padding: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
`
