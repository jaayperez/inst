import { styled } from 'baseui';

const Wrapper = styled('button', ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  fontSize: '20px',
  border: 0,
  backgroundColor: 'transparent',
  padding: '4px',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: '0.75',
  },
  ':focus': {
    outline: 0,
  },
}));

export default Wrapper;
