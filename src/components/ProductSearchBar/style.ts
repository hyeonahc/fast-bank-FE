import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const FilterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '1.6rem',
  '> *': {
    flexGrow: 1,
    flexBasis: '100px',
  },
});
