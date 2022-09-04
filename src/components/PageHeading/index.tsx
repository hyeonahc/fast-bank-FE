import React, { forwardRef } from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1(({ theme }) => ({
  marginBottom: '2rem',
  fontSize: theme.fontSize.big,
  // 24px : 35px
  lineHeight: '1.46em',
}));

type Props = Omit<JSX.IntrinsicElements['h1'], 'ref'>;

const PageHeading = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  return <H1Styled {...props} ref={ref} />;
});

export default React.memo(PageHeading);
