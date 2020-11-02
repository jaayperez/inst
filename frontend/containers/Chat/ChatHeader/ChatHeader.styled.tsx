import { styled } from 'baseui';

const Wrapper = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	'@media only screen and (max-width: 667px)': {
		width: '100%',
	},
});

export const User = styled('div', {
	display: 'flex',
	alignItems: 'center',
});

export const Image = styled('img', {
	width: '44px',
	height: '44px',
	borderRadius: '50%',
	objectFit: 'cover',
});

export const Button = styled('button', ({ $theme }) => ({
	border: 0,
	padding: 0,
	backgroundColor: 'transparent',
	cursor: 'pointer',
	fontSize: '20px',
	display: 'flex',
	alignItems: 'center',
	color: $theme.colors.primaryA,
	transition: 'color 0.2s ease',
	':focus': {
		outline: 0,
	},
	':hover': {
		color: $theme.colors.accent,
	},
}));

export const Info = styled('div', {
	display: 'flex',
	alignItems: 'center',
	padding: '0 10px',
});

export const Name = styled('h3', ({ $theme }) => ({
	color: $theme.colors.primaryA,
	fontSize: '16px',
	fontWeight: 500,
}));

export const Indicator = styled('span', ({ $theme }) => ({
	width: '8px',
	height: '8px',
	margin: '0 7px',
	borderRadius: '50px',
	backgroundColor: $theme.colors.positive300,
}));

export default Wrapper;
