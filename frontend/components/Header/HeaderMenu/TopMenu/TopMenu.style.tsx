import { styled } from 'baseui';

const Menu = styled('ul', {
	display: 'flex',
	alignItems: 'center',
	'@media only screen and (max-width: 1135px)': {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
});

export const MenuItem = styled('li', ({ $theme }) => ({
	listStyle: 'none',
	marginRight: '20px',
	'@media only screen and (max-width: 1135px)': {
		margin: 0,
		width: '100%',
		paddingTop: '8px',
		paddingBottom: '8px',
		borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
	},
	':last-child': {
		marginRight: '0',
	},
}));

export const MenuLink = styled('a', ({ $theme }) => ({
	display: 'inline-flex',
	color: $theme.colors.contentSecondary,
	textDecoration: 'none',
	paddingTop: '10px',
	paddingBottom: '10px',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	...$theme.typography.font200,
	'@media only screen and (max-width: 1135px)': {
		paddingTop: '8px',
		paddingBottom: '8px',
		paddingLeft: '20px',
		paddingRight: '20px',
		width: '100%',
		...$theme.typography.font300,
	},
	':hover': {
		paddingTop: '10px',
		paddingBottom: '10px',
		paddingLeft: '15px',
		paddingRight: '15px',
		color: $theme.colors.primary,
		backgroundColor: $theme.colors.backgroundTertiary,
		'@media only screen and (max-width: 1135px)': {
			paddingTop: '8px',
			paddingBottom: '8px',
			paddingLeft: '20px',
			paddingRight: '20px',
			backgroundColor: $theme.colors.backgroundSecondary,
		},
	},
}));

export default Menu;
