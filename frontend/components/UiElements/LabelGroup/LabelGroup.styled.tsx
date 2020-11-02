import { styled } from 'baseui';

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const LabelButton = styled('button', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: 0,
  backgroundColor: 'transparent',
  color: $theme.colors.contentSecondary,
  ...$theme.typography.font200,
  ':focus': {
    outline: 0,
  },
}));

export const Indicator = styled('span', {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
});

export default Wrapper;
