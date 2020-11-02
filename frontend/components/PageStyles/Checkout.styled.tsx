import { styled } from 'baseui';

export const MenuStep = styled('ul', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-42px',
  marginRight: '-42px',
  marginBottom: $theme.sizing.scale1000,
  '@media only screen and (max-width: 667px)': {
    marginBottom: $theme.sizing.scale900,
  },
  '@media only screen and (max-width: 480px)': {
    marginLeft: '-10px',
    marginRight: '-10px',
  },
}));

export const ListItem = styled('li', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  cursor: 'pointer',
  margin: '0 42px',
  position: 'relative',
  padding: `${$theme.sizing.scale500} 0`,
  color: $theme.colors.contentSecondary,
  ...$theme.typography.font400,
  fontWeight: 500,
  borderBottom: `2px solid transparent`,
  transition: 'all 0.3s ease',
  '@media only screen and (max-width: 480px)': {
    marginLeft: '10px',
    marginRight: '10px',
    ...$theme.typography.font350,
    padding: `${$theme.sizing.scale300} 0`,
  },
}));

export const Header = styled('div', ({ $theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
}));

export const Title = styled('h4', ({ $theme }) => ({
  ...$theme.typography.font450,
  textTransform: 'capitalize',
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale900,
  '@media only screen and (max-width: 667px)': {
    ...$theme.typography.font350,
    marginBottom: $theme.sizing.scale700,
  },
}));

export const Price = styled('p', ({ $theme }) => ({
  ...$theme.typography.font450,
  '@media only screen and (max-width: 667px)': {
    ...$theme.typography.font350,
  },
}));

export const Message = styled('p', ({ $theme }) => ({
  ...$theme.typography.font200,
  color: $theme.colors.contentSecondary,
  margin: `0 ${$theme.sizing.scale700}`,
}));

export const Strong = styled('strong', ({ $theme }) => ({
  color: $theme.colors.primary,
  fontWeight: 500,
}));

export const PriceList = styled('div', ({ $theme }) => ({
  borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
  padding: `${$theme.sizing.scale700} 0 ${$theme.sizing.scale300}`,
  marginBottom: $theme.sizing.scale900,
}));

export const PriceItem = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: $theme.sizing.scale600,
  color: $theme.colors.contentSecondary,
  ...$theme.typography.font200,
}));

export const ButtonGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
});
