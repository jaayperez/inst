import { styled } from 'baseui';

const MenuWrapper = styled('ul', {
	width: '200px',
	listStyle: 'none',
	padding: '8px 0',
	'@media only screen and (max-width: 1135px)': {
		width: '100%',
	},
});

export const Line = styled('div', ({ $theme }) => ({
	width: '100%',
	height: '1px',
	margin: '8px 0',
	backgroundColor: $theme.colors.backgroundTertiary,
}));

export const MenuItem = styled('a', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '8px 20px',
	cursor: 'pointer',
	color: $theme.colors.contentSecondary,
	...$theme.typography.font200,
	transition: 'all 0.3s ease',
	'@media only screen and (max-width: 1135px)': {
		...$theme.typography.font300,
	},
	':hover': {
		color: $theme.colors.primary,
		backgroundColor: $theme.colors.backgroundSecondary,
	},
}));

export default MenuWrapper;
