import { styled } from 'baseui';

const MenuWrapper = styled('div', ({ $theme }) => ({
	'@media only screen and (max-width: 1135px)': {
		overflowX: 'auto',
		overflowY: 'hidden',
		position: 'relative',
		width: '100vw',
		left: '-50vw',
		marginLeft: '50%',
		paddingTop: '20px',
		paddingBottom: '20px',
		backgroundColor: $theme.colors.primaryB,
	},
}));

export const Menu = styled('ul', () => ({
	'@media only screen and (max-width: 1135px)': {
		display: 'flex',
		alignItems: 'center',
		maxWidth: '920px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}));

export const MenuItem = styled('li', ({ $theme }) => ({
	listStyle: 'none',
	color: $theme.colors.contentSecondary,
	marginBottom: $theme.sizing.scale600,
	'@media only screen and (max-width: 1135px)': {
		paddingLeft: '15px',
		paddingRight: '15px',
		marginBottom: 0,
		flexShrink: 0,
		':last-child': {
			paddingRight: '30px',
		},
	},
	':last-child': {
		marginBottom: 0,
	},
}));

export const MenuLink = styled('a', ({ $theme }) => ({
	...$theme.typography.font200,
	cursor: 'pointer',
	color: $theme.colors.contentSecondary,
	transition: 'all 0.3s ease',
	':hover': {
		color: $theme.colors.primary,
	},
}));

export default MenuWrapper;
