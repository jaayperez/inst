import { styled } from 'baseui';

const Wrapper = styled('div', ({ $theme }) => ({
	padding: `${$theme.sizing.scale1000} 0 0`,
	position: 'relative',
	margin: '0 -15px',
	'@media only screen and (max-width: 480px)': {
		paddingTop: $theme.sizing.scale800,
	},
}));

export const PrevButton = styled('button', ({ $theme }) => ({
	border: 0,
	backgroundColor: 'transparent',
	position: 'absolute',
	top: 'calc(50% - 18px)',
	right: 'calc(100% + 15px)',
	left: 'auto',
	zIndex: 1,
	color: $theme.colors.primaryB,
	fontSize: '36px',
	padding: '0',
	lineHeight: '1',
	cursor: 'pointer',
	':hover': {
		outline: 0,
	},
	':focus': {
		outline: 0,
	},
	'@media only screen and (max-width: 767px)': {
		right: '100%',
	},
	'@media only screen and (max-width: 480px)': {
		display: 'none',
	},
}));

export const NextButton = styled('button', ({ $theme }) => ({
	border: 0,
	backgroundColor: 'transparent',
	position: 'absolute',
	top: 'calc(50% - 18px)',
	left: 'calc(100% + 15px)',
	right: 'auto',
	zIndex: 1,
	color: $theme.colors.primaryB,
	fontSize: '36px',
	padding: '0',
	lineHeight: '1',
	cursor: 'pointer',
	':hover': {
		outline: 0,
	},
	':focus': {
		outline: 0,
	},
	'@media only screen and (max-width: 767px)': {
		left: '100%',
	},
	'@media only screen and (max-width: 480px)': {
		display: 'none',
	},
}));

export const ContentWrapper = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',
	height: '600px',
	overflow: 'hidden',
	'@media only screen and (max-width: 1135px)': {
		height: '480px',
	},
});

export const Media = styled('div', {
	width: 'calc(100% - 335px)',
	'@media only screen and (max-width: 1135px)': {
		width: '100%',
		height: 'calc(100% - 172px)',
		marginTop: '69px',
		pointerEvents: 'all',
	},
});

export const Image = styled('img', {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
});

export const Content = styled('article', ({ $theme }) => ({
	width: '334px',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '450px',
	borderLeft: `1px solid ${$theme.colors.backgroundTertiary}`,
	overflow: 'hidden',
	'@media only screen and (max-width: 1135px)': {
		width: '100%',
		justifyContent: 'space-between',
		position: 'absolute',
		left: 0,
		top: 0,
		height: '100%',
		pointerEvents: 'none',
		borderLeft: 0,
	},
}));

export const Header = styled('header', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: $theme.sizing.scale600,
	backgroundColor: $theme.colors.primaryB,
	borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
	'@media only screen and (max-width: 1135px)': {
		pointerEvents: 'all',
	},
}));

export const AvatarWrapper = styled('div', {
	display: 'flex',
	alignItems: 'center',
});

export const Name = styled('h4', ({ $theme }) => ({
	paddingLeft: $theme.sizing.scale600,
	paddingRight: $theme.sizing.scale600,
	...$theme.typography.font250,
	color: $theme.colors.primaryA,
	fontWeight: 700,
}));

export const Dot = styled('span', ({ $theme }) => ({
	fontWeight: 700,
	color: $theme.colors.primaryA,
	fontFamily: 'monospace',
}));

export const FollowButton = styled('button', ({ $theme }) => ({
	border: 0,
	cursor: 'pointer',
	backgroundColor: 'transparent',
	color: $theme.colors.accent,
	...$theme.typography.font250,
	fontWeight: 700,
	paddingLeft: $theme.sizing.scale600,
	paddingRight: $theme.sizing.scale600,
	transition: 'all 0.3s ease',
	':hover': {
		opacity: 0.85,
	},
	':focus': {
		outline: 'none',
	},
}));

export const MoreButton = styled('button', ({ $theme }) => ({
	border: 0,
	cursor: 'pointer',
	backgroundColor: 'transparent',
	display: 'inline-flex',
	...$theme.typography.font550,
	color: $theme.colors.primaryA,
	transition: 'all 0.3s ease',
	':hover': {
		color: $theme.colors.accent,
	},
	':focus': {
		outline: 'none',
	},
}));

export const Body = styled('main', ({ $theme }) => ({
	flex: '1 0 auto',
	overflowX: 'hidden',
	position: 'relative',
	marginRight: `-${$theme.sizing.scale600}`,
	padding: `${$theme.sizing.scale200} ${$theme.sizing.scale600}`,
	'@media only screen and (max-width: 1135px)': {
		display: 'none',
		visibility: 'hidden',
	},
}));

export const Video = styled('div', ({ $theme }) => ({
	position: 'relative',
	backgroundColor: $theme.colors.primary,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
}));

export const CommentWrapper = styled('div', ({ $theme }) => ({
	width: '100%',
	height: '100%',
	overflowY: 'scroll',
	paddingBottom: $theme.sizing.scale600,
	boxSizing: 'border-box',
	position: 'absolute',
	paddingRight: $theme.sizing.scale600,
}));

export const CommentCard = styled('div', ({ $theme }) => ({
	display: 'flex',
	paddingTop: $theme.sizing.scale600,
	alignItems: 'flex-start',
}));

export const CommentInfo = styled('div', ({ $theme }) => ({
	width: 'calc(100% - 48px)',
	padding: `0 ${$theme.sizing.scale600}`,
	color: $theme.colors.borderInverseOpaque,
	'@media only screen and (max-width: 1135px)': {
		padding: `0 ${$theme.sizing.scale400}`,
	},
}));

export const CommentAuthor = styled('h3', ({ $theme }) => ({
	display: 'inline-flex',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	...$theme.typography.font200,
	fontWeight: 600,
	marginRight: $theme.sizing.scale200,
}));

export const CommentContent = styled('span', ({ $theme }) => ({
	color: $theme.colors.borderInverseOpaque,
	marginLeft: $theme.sizing.scale200,
}));

export const CommentTime = styled('div', ({ $theme }) => ({
	color: $theme.colors.contentTertiary,
	marginTop: $theme.sizing.scale400,
}));

export const Button = styled('button', ({ $theme }) => ({
	border: 0,
	padding: 0,
	marginLeft: $theme.sizing.scale600,
	cursor: 'pointer',
	fontWeight: 600,
	fontSize: $theme.sizing.scale500,
	color: $theme.colors.primaryA,
	backgroundColor: 'transparent',
	':hover': {
		outline: 0,
	},
	':focus': {
		outline: 0,
	},
}));

export const Footer = styled('footer', ({ $theme }) => ({
	padding: `${$theme.sizing.scale200} ${$theme.sizing.scale300}`,
	borderTop: `1px solid ${$theme.colors.backgroundTertiary}`,
	backgroundColor: $theme.colors.primaryB,
	'@media only screen and (max-width: 1135px)': {
		pointerEvents: 'all',
	},
}));

export const SocialList = styled('ul', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	paddingTop: $theme.sizing.scale500,
	paddingBottom: $theme.sizing.scale400,
}));

export const ListItem = styled('li', ({ $theme }) => ({
	display: 'inline-flex',
	listStyle: 'none',
	margin: `0 ${$theme.sizing.scale200}`,
	...$theme.typography.font550,
	color: $theme.colors.primaryA,
	':last-child': {
		marginLeft: 'auto',
	},
}));

export const ActivityInfo = styled('div', ({ $theme }) => ({
	padding: `${$theme.sizing.scale200} ${$theme.sizing.scale300} ${$theme.sizing.scale400}`,
}));

export const NumberOFLike = styled('h5', ({ $theme }) => ({
	...$theme.typography.font250,
	color: $theme.colors.primaryA,
	fontWeight: 600,
}));

export const PostTime = styled('time', ({ $theme }) => ({
	...$theme.typography.font100,
	color: $theme.colors.contentTertiary,
}));

export default Wrapper;
