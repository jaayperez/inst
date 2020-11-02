import { styled } from 'baseui';

export const MenuItem = styled('li', ({ $theme }) => ({
	listStyle: 'none',
	marginBottom: $theme.sizing.scale600,
}));

export const MenuLink = styled('a', ({ $theme }) => ({
	...$theme.typography.font250,
	cursor: 'pointer',
	color: $theme.colors.contentSecondary,
	transition: 'all 0.3s ease',
	':hover': {
		color: $theme.colors.primary,
	},
}));

export const AvatarWrapper = styled('div', ({ $theme }) => ({
	marginBottom: $theme.sizing.scale700,
}));

export const ButtonGroup = styled('div', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: $theme.sizing.scale600,
}));

export const Title = styled('h3', ({ $theme }) => ({
	...$theme.typography.font450,
	color: $theme.colors.primaryA,
	marginBottom: $theme.sizing.scale500,
}));

export const Subtitle = styled('p', ({ $theme }) => ({
	...$theme.typography.font200,
	color: $theme.colors.contentTertiary,
}));

export const SpaceBetween = styled('div', ({ $theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: `${$theme.sizing.scale600} 0`,
	borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
}));

export const TextButton = styled('button', {
	border: 0,
	cursor: 'pointer',
	backgroundColor: 'transparent',
	':focus': {
		outline: 0,
	},
});
