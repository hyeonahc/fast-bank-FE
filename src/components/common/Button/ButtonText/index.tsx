import { forwardRef } from 'react';
import Button from '../index';

type Props = { buttonText?: string } & Omit<
  JSX.IntrinsicElements['button'],
  'ref'
>;

const ButtonText = forwardRef<HTMLButtonElement, Props>(
  ({ buttonText, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {buttonText}
      </Button>
    );
  },
);

export default ButtonText;
