import { styled } from 'baseui';

const Section = styled('section', {
	width: '100%',
	padding: '46px 0 50px',
	position: 'relative',
	'@media only screen and (max-width: 1135px)': {
		padding: '30px 0 40px',
	},
	'@media only screen and (max-width: 480px)': {
		padding: '30px 0',
	},
});

export const Title = styled('h2', ({ $theme }) => ({
	...$theme.typography.font950,
	color: $theme.colors.primaryA,
	marginBottom: $theme.sizing.scale600,
	'@media only screen and (max-width: 1135px)': {
		...$theme.typography.font850,
	},
	'@media only screen and (max-width: 767px)': {
		...$theme.typography.font750,
		marginBottom: $theme.sizing.scale500,
	},
	'@media only screen and (max-width: 480px)': {
		...$theme.typography.font650,
		marginBottom: $theme.sizing.scale400,
	},
}));

export const Subtitle = styled('p', ({ $theme }) => ({
	...$theme.typography.font200,
	color: $theme.colors.contentSecondary,
}));

export const Backdrop = styled('div', ({ $theme }) => ({
	width: '100%',
	height: '286px',
	backgroundColor: $theme.colors.backgroundSecondary,
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 0,
	borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
}));

export default Section;
