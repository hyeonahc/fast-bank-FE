import styled from 'styled-components';

interface Props {
  className?: string;
  size?: string;
  color?: string;
}

const Container = styled.div.attrs<Props>(({ theme, ...props }) => ({
  size: props.size ?? '80px',
  color: props.color ?? theme.colors.primary,
}))<Props>`
  font-size: ${({ size }) => size};

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 1em;
    height: 1em;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 0.4125em;
    width: 0.1625em;
    height: 0.1625em;
    border-radius: 50%;
    background: ${({ color }) => color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 0.1em;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 0.1em;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 0.4em;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 0.7em;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0.3em, 0);
    }
  }
`;

const Loading = (props: Props) => {
  return (
    <Container {...props}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loading;
