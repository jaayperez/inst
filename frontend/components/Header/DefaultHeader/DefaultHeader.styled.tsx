import { styled } from 'baseui';

const HeaderWrapper = styled('div', {
  width: '100%',
  paddingTop: '23px',
});

export const TopBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '15px',
});

export const MenuRight = styled('div', {
  display: 'grid',
  gridGap: '30px',
  gridTemplateColumns: 'auto auto auto',
  alignItems: 'center',
});

export const Navbar = styled('nav', ({ $theme }) => ({
  width: '100%',
  backgroundColor: $theme.colors.primaryB,
  borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
}));

export const StickyNav = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const NavLeft = styled('div', {
  display: 'flex',
});

export const NavRight = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  display: 'grid',
  gridGap: '30px',
  gridTemplateColumns: 'auto auto',
  alignItems: 'center',
  transform: 'translate3d(0 ,-20px, 0)',
  transition: 'all 0.25s ease',
});

export default HeaderWrapper;
