import React, { forwardRef } from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
  font-size: 2.4rem;
`;

type Props = Omit<JSX.IntrinsicElements['h1'], 'ref'>;

const PageHeading = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  return <H1Styled {...props} ref={ref} />;
});

export default PageHeading;
