import { styled } from 'baseui';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const ListItem = styled('li', {
  listStyle: 'none',
});

export const AnchorText = styled(AnchorLink, ({ $theme }) => ({
  ...$theme.typography.font200,
  textDecoration: 'none',
  color: $theme.colors.borderInverseOpaque,
  padding: '10px 0',
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',

  ':hover': {
    color: $theme.colors.primary,
  },
}));
