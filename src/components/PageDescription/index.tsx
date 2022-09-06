import styled from 'styled-components';
import { useAppSelector } from '@/modules/hooks';

interface Props {
  className?: string;
  children: string;
}

export const PageDescriptionStyled = styled.div`
  line-height: 1.5em;
`;

/**
 * children - %NAME 이 유저이름으로 바뀜
 * @param props
 * @constructor
 */
const PageDescription = (props: Props) => {
  const { className, children } = props;
  const userName = useAppSelector((state) => {
    return (state.user as any).name ?? '...';
  });

  return (
    <PageDescriptionStyled className={className}>
      {children.replaceAll('%NAME', userName)}
    </PageDescriptionStyled>
  );
};

export default PageDescription;
