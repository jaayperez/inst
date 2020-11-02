import { styled } from 'baseui';

const HeaderWrapper = styled('header', ({ $theme }) => ({
	width: '100%',
	backgroundColor: $theme.colors.primaryB,
	zIndex: 2,
}));

export const ShowInMobile = styled('div', {
	display: 'none',
	visibility: 'hidden',
	'@media only screen and (max-width: 1135px)': {
		display: 'block',
		visibility: 'visible',
	},
});

export const HideInMobile = styled('div', {
	display: 'block',
	visibility: 'visible',
	'@media only screen and (max-width: 1135px)': {
		display: 'none',
		visibility: 'hidden',
	},
});

export default HeaderWrapper;
