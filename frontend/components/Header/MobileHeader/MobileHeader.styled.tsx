import { styled } from 'baseui';

const HeaderWrapper = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `10px ${$theme.sizing.scale200} 6px`,
  borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
  backgroundColor: $theme.colors.primaryB,
}));

export const PageTitle = styled('a', ({ $theme }) => ({
  ...$theme.typography.font550,
  fontWeight: 600,
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    color: $theme.colors.borderInverseOpaque,
  },
}));

export const TopMenuWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export default HeaderWrapper;
