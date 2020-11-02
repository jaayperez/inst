import { styled } from 'baseui';

const CardWrapper = styled('article', ({ $theme }) => ({
	width: '100%',
	padding: '43px 50px 40px',
	boxShadow: $theme.lighting.shadow400,
	backgroundColor: $theme.colors.primaryB,
	display: 'flex',
	flexDirection: 'column',
	minHeight: '473px',
}));

export const CardHeader = styled('header', ({ $theme }) => ({
	marginBottom: $theme.sizing.scale1000,
}));

export const Title = styled('h4', ({ $theme }) => ({
	...$theme.typography.font450,
	color: $theme.colors.primaryA,
}));

export const Tags = styled('div', ({ $theme }) => ({
	marginTop: $theme.sizing.scale500,
}));

export const CardBody = styled('main', ({ $theme }) => ({
	marginBottom: $theme.sizing.scale1200,
	color: $theme.colors.primaryA,
	flexGrow: 1,
}));

export const ListItemLabel = styled('div', ({ $theme }) => ({
	...$theme.typography.font200,
	marginBottom: $theme.sizing.scale600,
	display: 'flex',
	alignItems: 'center',
}));

export const CardFooter = styled('footer', {
	textAlign: 'center',
});

export const Price = styled('p', ({ $theme }) => ({
	...$theme.typography.font950,
	color: $theme.colors.primaryA,
	marginBottom: $theme.sizing.scale900,
}));

export const PlanText = styled('span', ({ $theme }) => ({
	...$theme.typography.font200,
	color: $theme.colors.contentSecondary,
}));

export default CardWrapper;
