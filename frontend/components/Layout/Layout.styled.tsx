import { styled } from 'baseui';

const AppWrapper = styled('main', {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
});

export const ContentWrapper = styled('div', ({ $theme }) => ({
	flex: '1 1 auto',
	overflow: 'hidden',
	paddingBottom: $theme.sizing.scale1400,
	'@media only screen and (max-width: 1135px)': {
		paddingBottom: $theme.sizing.scale1000,
	},
	'@media only screen and (max-width: 767px)': {
		paddingBottom: $theme.sizing.scale900,
	},
}));

export default AppWrapper;
