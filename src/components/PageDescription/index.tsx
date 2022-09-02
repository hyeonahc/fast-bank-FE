import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: string;
}

export const PageDescriptionStyled = styled.div({});

/**
 * children - %NAME 이 유저이름으로 바뀜
 * @param props
 * @constructor
 */
const PageDescription = (props: Props) => {
  const { className, children } = props;
  const [user] = useState({
    name: 'TEST',
  });

  return (
    <PageDescriptionStyled className={className}>
      {children.replaceAll('%NAME', user.name)}
    </PageDescriptionStyled>
  );
};

export default PageDescription;
