import React from 'react';
import { Tag } from 'baseui/tag';
import { Button } from 'baseui/button';
import { FiCheck } from 'react-icons/fi';
import CardWrapper, {
	CardHeader,
	Title,
	Tags,
	CardBody,
	ListItemLabel,
	CardFooter,
	Price,
	PlanText,
} from './PricingCard.styled';

type PricingCardProps = {
	title: string;
	type: string;
	items?: {
		id: string | number;
		title: string;
	}[];
	price: string | number;
	btn: string;
	isLoading?: boolean;
	onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const PricingCard = ({
	title,
	type,
	items,
	price,
	btn,
	isLoading,
	onClick,
}: PricingCardProps) => {
	const planType = type.toLowerCase();
	let tag;

	switch (planType) {
		case 'primary':
			tag = (
				<Tag
					closeable={false}
					kind="positive"
					variant="solid"
					overrides={{
						Root: {
							style: () => {
								return { marginLeft: 0 };
							},
						},
					}}
				>
					{type}
				</Tag>
			);
			break;

		case 'advance':
			tag = (
				<Tag
					closeable={false}
					kind="accent"
					variant="solid"
					overrides={{
						Root: {
							style: () => {
								return { marginLeft: 0 };
							},
						},
					}}
				>
					{type}
				</Tag>
			);
			break;

		default:
			tag = (
				<Tag
					closeable={false}
					kind={'accent'}
					overrides={{
						Root: {
							style: () => {
								return { marginLeft: 0 };
							},
						},
					}}
				>
					{type}
				</Tag>
			);
			break;
	}

	return (
		<CardWrapper>
			<CardHeader>
				<Title>{title}</Title>
				<Tags>{tag}</Tags>
			</CardHeader>
			{/* end of header */}

			<CardBody>
				{items &&
					items.map((item) => (
						<ListItemLabel key={`price-card--key${item.id}`}>
							<FiCheck />
							&nbsp; {item.title}
						</ListItemLabel>
					))}
			</CardBody>
			{/* end of body */}

			<CardFooter>
				<Price>
					{price}
					{planType !== 'free' && <PlanText> / mo</PlanText>}
				</Price>
				<Button
					size="large"
					onClick={onClick}
					isLoading={isLoading}
					overrides={{
						BaseButton: {
							style: ({ $theme }) => {
								return {
									width: '100%',
									height: '48px',
									...$theme.typography.font250,
								};
							},
						},
					}}
				>
					{btn}
				</Button>
			</CardFooter>
			{/* end of footer */}
		</CardWrapper>
	);
};

export default PricingCard;
