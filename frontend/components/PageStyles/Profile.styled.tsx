import { styled } from 'baseui';

export const PageTitle = styled('div', ({ $theme }) => ({
	minHeight: '286px',
	backgroundColor: $theme.colors.backgroundSecondary,
	borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
	display: 'flex',
	justifyContent: 'flex-end',
	flexDirection: 'column',
	padding: `${$theme.sizing.scale1000} 0`,
	'@media only screen and (max-width: 1135px)': {
		padding: `${$theme.sizing.scale900} 0`,
		minHeight: '200px',
	},
}));

export const InfoBar = styled('div', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'space-between',
	marginTop: $theme.sizing.scale800,
	marginBottom: `-${$theme.sizing.scale100}`,
	'@media only screen and (max-width: 667px)': {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: $theme.sizing.scale400,
	},
}));

export const UserAvatar = styled('img', {
	width: '120px',
	height: '120px',
	borderRadius: '50%',
	objectFit: 'cover',
	'@media only screen and (max-width: 1135px)': {
		width: '96px',
		height: '96px',
	},
	'@media only screen and (max-width: 480px)': {
		width: '75px',
		height: '75px',
	},
});

export const UserName = styled('h3', ({ $theme }) => ({
	...$theme.typography.font450,
	color: $theme.colors.primaryA,
	marginBottom: $theme.sizing.scale200,
	'@media only screen and (max-width: 1135px)': {
		marginBottom: $theme.sizing.scale100,
	},
}));

export const UserRole = styled('p', ({ $theme }) => ({
	...$theme.typography.font200,
	color: $theme.colors.contentSecondary,
}));

export const Menu = styled('ul', ({ $theme }) => ({
	display: 'flex',
	'@media only screen and (max-width: 1135px)': {
		marginTop: $theme.sizing.scale700,
	},
}));

export const MenuList = styled('li', (props: any) => ({
	listStyle: 'none',
	marginLeft: props.$theme.sizing.scale800,
	marginRight: props.$theme.sizing.scale800,
	cursor: 'pointer',
	color: props.$theme.colors.contentSecondary,
	...props.$theme.typography.font200,
	transition: 'all 0.3s ease',
	':first-child': {
		marginLeft: 0,
	},
	':last-child': {
		marginRight: 0,
	},
	':hover': {
		color: props.$theme.colors.primaryA,
	},
}));

export const Strong = styled('strong', ({ $theme }) => ({
	color: $theme.colors.primary,
}));

export const AlignItems = styled('div', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	...$theme.typography.font350,
	color: $theme.colors.primary,
}));

export const List = styled('ul', {
	maxHeight: '449px',
	overflow: 'hidden',
	overflowY: 'scroll',
	width: 'calc(100% + 35px)',
	paddingRight: '35px',
});

export const ListItem = styled('li', {
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '8px 0 12px',
});
