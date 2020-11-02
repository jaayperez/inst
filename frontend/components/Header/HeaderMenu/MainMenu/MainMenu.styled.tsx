import { styled } from 'baseui';

const Menu = styled('ul', {
	display: 'flex',
	alignItems: 'center',
	transition: 'padding 0.25s ease',
	'@media only screen and (max-width: 1135px)': {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
});

export const MenuItem = styled('li', ({ $theme }) => ({
	listStyle: 'none',
	marginRight: '25px',
	'@media only screen and (max-width: 1135px)': {
		margin: 0,
		width: '100%',
		paddingTop: '8px',
		paddingBottom: '8px',
		borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
	},
}));

export const MenuLink = styled('a', ({ $theme }) => ({
	display: 'inline-flex',
	color: $theme.colors.contentSecondary,
	textDecoration: 'none',
	padding: `${$theme.sizing.scale600} 0`,
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	...$theme.typography.font200,
	':hover': {
		color: $theme.colors.primary,
	},
	'@media only screen and (max-width: 1135px)': {
		paddingTop: '8px',
		paddingBottom: '8px',
		paddingLeft: '20px',
		paddingRight: '20px',
		width: '100%',
		...$theme.typography.font300,
		':hover': {
			backgroundColor: $theme.colors.backgroundSecondary,
		},
	},
}));

export default Menu;
