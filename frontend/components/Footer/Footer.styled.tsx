import { styled } from 'baseui';

const FooterWrapper = styled('footer', {
  width: '100%',
});

export const Text = styled('p', ({ $theme }) => ({
  width: '100%',
  margin: '0',
  textAlign: 'center',
  color: $theme.colors.contentSecondary,
  padding: '27px 0 25px',
  borderTop: `1px solid ${$theme.colors.backgroundTertiary}`,
  ...$theme.typography.font100,
}));

export default FooterWrapper;
