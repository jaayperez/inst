import { styled } from 'baseui';

export const Product = styled('a', (props: any) => ({
  display: 'block',
  minHeight: '200px',
  textAlign: props.$alignItem ? props.alignItem : 'center',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  marginTop: '20px',
  marginBottom: '10px',
  ':hover': {
    opacity: 0.8,
  },
}));

export const ImageWrapper = styled('div', {
  marginBottom: '10px',
});

export const Title = styled('h4', ({ $theme }) => ({
  ...$theme.typography.font250,
  color: $theme.colors.primaryA,
  fontWeight: 600,
  marginBottom: $theme.sizing.scale200,
}));

export const Price = styled('p', ({ $theme }) => ({
  ...$theme.typography.font300,
  color: $theme.colors.contentSecondary,
}));
