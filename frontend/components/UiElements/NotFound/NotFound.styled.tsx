import { styled } from 'baseui';

const NotFoundWrapper = styled('div', {
  width: '100%',
  padding: '54px 15px',
  textAlign: 'center',
});

export const Title = styled('h2', ({ $theme }) => ({
  ...$theme.typography.font950,
}));

export default NotFoundWrapper;
