import { styled, withStyle } from 'baseui';

export const Image = styled('img', {
	width: '52px',
	height: '52px',
	borderRadius: '50%',
	objectFit: 'cover',
});

export const Info = styled('div', {
	padding: '0 15px',
});

export const SearchInput = styled('div', {
	position: 'relative',
	marginTop: '15px',
	marginBottom: '30px',
});

export const Input = styled('input', ({ $theme }) => ({
	width: '100%',
	minHeight: '40px',
	border: '1px solid transparent',
	paddingLeft: '45px',
	paddingRight: '15px',
	color: $theme.colors.primaryA,
	backgroundColor: $theme.colors.primaryB,
	transition: 'border 0.2s ease',
	':focus': {
		outline: 0,
		border: `1px solid ${$theme.colors.primaryA}`,
	},
}));

export const Icon = styled('span', ({ $theme }) => ({
	color: $theme.colors.primaryA,
	minWidth: '45px',
	minHeight: '40px',
	fontSize: '20px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	top: 0,
}));

export const UserList = styled('div', {
	marginLeft: '-20px',
	marginRight: '-20px',
	maxHeight: 'calc(560px - 110px)',
	overflow: 'auto',
});

export const UserListItem = styled('div', (props: any) => ({
	cursor: 'pointer',
	padding: '15px 20px',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: props.$isActive
		? props.$theme.colors.primaryB
		: props.$theme.colors.backgroundSecondary,
}));

export const UserListItemImage = withStyle(Image, {
	width: '44px',
	height: '44px',
});

export const UserListItemInfo = withStyle(Info, {
	padding: '0 15px',
});

export const UserName = styled('h4', ({ $theme }) => ({
	fontSize: '13px',
	color: $theme.colors.primaryA,
}));

export const UserMessage = styled('p', ({ $theme }) => ({
	color: $theme.colors.contentSecondary,
	fontSize: '13px',
	margin: '5px 0 0',
}));
