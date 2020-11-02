import { styled } from 'baseui';

const Wrapper = styled('div', ({ $theme }) => ({
	display: 'flex',
	height: '560px',
	backgroundColor: $theme.colors.primaryB,
	boxShadow: $theme.lighting.shadow400,
	overflow: 'hidden',
	'@media only screen and (max-width: 667px)': {
		maxWidth: '375px',
		marginLeft: 'auto',
		marginRight: 'auto',
		position: 'relative',
	},
}));

export const Sidebar = styled('div', (props: any) => ({
	flexBasis: '280px',
	padding: '20px',
	backgroundColor: props.$theme.colors.backgroundSecondary,
	'@media only screen and (max-width: 667px)': {
		flexBasis: '100%',
		width: '100%',
		height: '100%',
		position: 'absolute',
		left: 0,
		top: props.$isActive ? '0' : '2%',
		opacity: props.$isActive ? 1 : 0,
		visibility: props.$isActive ? 'visible' : 'hidden',
		zIndex: props.$isActive ? 1 : 0,
		transition: 'all 0.25s ease',
	},
}));

export const Message = styled('div', {
	padding: '25px',
	display: 'flex',
	flexDirection: 'column',
	flexBasis: 'calc(100% - 280px)',
	overflow: 'hidden',
	'@media only screen and (max-width: 667px)': {
		flexBasis: '100%',
		height: '100%',
	},
});

export const Header = styled('div', ({ $theme }) => ({
	paddingBottom: '10px',
	borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
	'@media only screen and (max-width: 667px)': {
		display: 'flex',
		alignItems: 'center',
	},
}));

export const ArrowButton = styled('button', ({ $theme }) => ({
	color: $theme.colors.accent,
	border: 0,
	width: '30px',
	height: '30px',
	fontSize: '27px',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'transparent',
	marginRight: '15px',
	'@media only screen and (min-width: 668px)': {
		display: 'none',
	},
	':focus': {
		outline: 0,
	},
}));

export const Body = styled('div', {
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	maxHeight: '391px',
	overflow: 'auto',
});

export const Footer = styled('div', ({ $theme }) => ({
	paddingTop: '15px',
	borderTop: `1px solid ${$theme.colors.backgroundTertiary}`,
	backgroundColor: $theme.colors.primaryB,
}));

export default Wrapper;
