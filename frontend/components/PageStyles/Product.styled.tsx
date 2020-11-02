import { styled } from 'baseui';

const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const MediaWrapper = styled('div', {
  width: '470px',
  textAlign: 'center',
  '@media only screen and (max-width: 1200px)': {
    width: '400px',
  },
  '@media only screen and (max-width: 767px)': {
    width: '100%',
  },
});

export const Image = styled('img', ({ $theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  backgroundColor: $theme.colors.primaryB,
  boxShadow: $theme.lighting.shadow500,
}));

export const ContentWrapper = styled('div', {
  width: 'calc(100% - 518px)',
  '@media only screen and (max-width: 1200px)': {
    width: 'calc(100% - 440px)',
  },
  '@media only screen and (max-width: 767px)': {
    width: '100%',
    paddingTop: '40px',
  },
});

export const ProductTitle = styled('h3', ({ $theme }) => ({
  ...$theme.typography.font850,
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale500,
  '@media only screen and (max-width: 767px)': {
    ...$theme.typography.font750,
  },
  '@media only screen and (max-width: 480px)': {
    ...$theme.typography.font650,
  },
}));

export const ProductPrice = styled('div', ({ $theme }) => ({
  ...$theme.typography.font750,
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale1400,
  '@media only screen and (max-width: 767px)': {
    ...$theme.typography.font650,
    marginBottom: $theme.sizing.scale1000,
  },
  '@media only screen and (max-width: 480px)': {
    ...$theme.typography.font550,
  },
}));

export const List = styled('ul', ({ $theme }) => ({
  margin: `${$theme.sizing.scale800} 0`,
}));

export const ListItem = styled('li', ({ $theme }) => ({
  ...$theme.typography.font200,
  color: $theme.colors.contentSecondary,
  marginBottom: $theme.sizing.scale600,
  display: 'flex',
  alignItems: 'center',
}));

export const ProductDescription = styled('p', ({ $theme }) => ({
  ...$theme.typography.font200,
  color: $theme.colors.contentSecondary,
  lineHeight: '26px',
  marginBottom: $theme.sizing.scale900,
}));

export default Wrapper;
