import { styled } from 'baseui';

const Wrapper = styled('figure', (props: any) => ({
  position: 'relative',
  cursor: props.$cursor ? 'pointer' : 'default',
}));

export const Caption = styled('figcaption', {
  position: 'absolute',
  width: '100%',
  height: 'calc(100% - 3px)',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export const TopRight = styled('span', ({ $theme }) => ({
  position: 'absolute',
  top: $theme.sizing.scale600,
  right: $theme.sizing.scale600,
  ...$theme.typography.font200,
  zIndex: 2,
  '@media only screen and (min-width: 991px) and (max-width: 1135px)': {
    ...$theme.typography.font300,
  },
}));

export const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',
});

export const ListItem = styled('li', ({ $theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: `0 ${$theme.sizing.scale300}`,
  ...$theme.typography.font200,
  '@media only screen and (min-width: 991px) and (max-width: 1135px)': {
    ...$theme.typography.font300,
  },
}));

export default Wrapper;
