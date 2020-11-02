import { styled } from 'baseui';

const Wrapper = styled('div', (props: any) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: props.$theme.sizing.scale800,
	paddingBottom: props.$theme.sizing.scale800,
	borderBottom: props.$hideBorderBottom
		? 0
		: `1px solid ${props.$theme.colors.backgroundTertiary}`,
	width: '100%',
	'@media only screen and (max-width: 1135px)': {
		paddingTop: props.$theme.sizing.scale600,
		paddingBottom: props.$theme.sizing.scale600,
	},
}));

export const Image = styled('div', ({ $theme }) => ({
	width: '104px',
	height: 'auto',
	backgroundColor: $theme.colors.backgroundSecondary,
	'@media only screen and (max-width: 667px)': {
		width: '75px',
	},
}));

export const Content = styled('div', {
	width: 'calc(100% - 127px)',
	'@media only screen and (max-width: 667px)': {
		width: 'calc(100% - 95px)',
	},
});

export const Header = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

export const Title = styled('h5', ({ $theme }) => ({
	...$theme.typography.font250,
	color: $theme.colors.primaryA,
}));

export const Price = styled('p', ({ $theme }) => ({
	...$theme.typography.font400,
	color: $theme.colors.contentSecondary,
}));

export const Quantity = styled('div', ({ $theme }) => ({
	...$theme.typography.font250,
	color: $theme.colors.contentSecondary,
	margin: `${$theme.sizing.scale500} 0`,
	'@media only screen and (max-width: 667px)': {
		margin: `${$theme.sizing.scale300} 0`,
	},
}));

export const Footer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection: 'row-reverse',
});

export const Color = styled('p', ({ $theme }) => ({
	...$theme.typography.font200,
	color: $theme.colors.contentSecondary,
}));

export const Button = styled('button', ({ $theme }) => ({
	...$theme.typography.font450,
	border: 0,
	padding: 0,
	color: $theme.colors.contentSecondary,
	backgroundColor: 'transparent',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	'@media only screen and (max-width: 667px)': {
		...$theme.typography.font350,
	},
	':hover': {
		color: $theme.colors.borderError,
	},
	':focus': {
		outline: 0,
	},
}));

export default Wrapper;
