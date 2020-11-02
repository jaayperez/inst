import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { FaShoppingBag, FaMapMarkerAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import Cart from '../../containers/Shop/Cart';
import Address from '../../containers/Shop/Address';
import Payment from '../../containers/Shop/Payment';
import {
	MenuStep,
	ListItem,
	Title,
	PriceList,
	PriceItem,
} from 'components/PageStyles/Checkout.styled';
import { useCartState } from '../../contexts/cart/cart.provider';
import { calcCartItemsTotal } from '../../contexts/cart/cart.utils';
import {
	THEME,
	useThemeSwitcherCtx,
} from '../../contexts/theme/theme.provider';

const TITLE = 'Checkout';
const SUB_TITLE = 'Inst checkout page';

const Checkout: NextPage<{}> = () => {
	const [step, setStep] = useState(1);
	const cartItems = useCartState('cartItems');
	const totalPrice = calcCartItemsTotal(cartItems);
	const { theme } = useThemeSwitcherCtx();

	const handleStep = () => {
		setStep(step + 1);
	};

	let component: React.ReactNode;
	switch (step) {
		case 1:
			component = <Cart products={cartItems} />;
			break;
		case 2:
			component = <Address />;
			break;
		case 3:
			component = <Payment />;
			break;
	}

	return (
		<>
			<Head>
				<title>{TITLE} | INST.</title>
				<meta name="Description" content={SUB_TITLE} />
			</Head>

			<PageTitle
				title={TITLE}
				subtitle={SUB_TITLE}
				backdrop={false}
				bgColor={theme === THEME.light ? '#ffffff' : '#000000'}
			/>

			<Container>
				<MenuStep className="step-menu">
					<ListItem
						className={step === 1 ? 'active' : ''}
						onClick={() => setStep(1)}
					>
						<FaShoppingBag />
						<Block
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											paddingLeft: '5px',
											paddingRight: '5px',
											color: $theme.colors.primaryA,
										};
									},
								},
							}}
						>
							Bag
						</Block>
					</ListItem>
					<ListItem
						className={step === 2 ? 'active' : ''}
						onClick={() => setStep(2)}
					>
						<FaMapMarkerAlt />
						<Block
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											paddingLeft: '5px',
											paddingRight: '5px',
											color: $theme.colors.primaryA,
										};
									},
								},
							}}
						>
							Address
						</Block>
					</ListItem>
					<ListItem
						className={step === 3 ? 'active' : ''}
						onClick={() => setStep(3)}
					>
						<FaMoneyCheckAlt />
						<Block
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											paddingLeft: '5px',
											paddingRight: '5px',
											color: $theme.colors.primaryA,
										};
									},
								},
							}}
						>
							Payment
						</Block>
					</ListItem>
				</MenuStep>

				<Block marginLeft={[0, 0, 0, '-25px']} marginRight={[0, 0, 0, '-25px']}>
					<Grid
						gridColumns={12}
						gridGaps={[40, 50, 0]}
						gridGutters={[0, 0, 50]}
						gridMargins={0}
					>
						<Cell span={[12, 12, 8]}>{component}</Cell>
						{step !== 3 && (
							<Cell span={[12, 12, 4]}>
								<Block paddingTop={['30px', '40px', '0']}>
									<Title>Price Details</Title>
									<Input
										onChange={(e: any) => console.log(e.target.value)}
										placeholder="Enter coupon code"
										overrides={{
											InputContainer: {
												style: () => {
													return { backgroundColor: 'transparent' };
												},
											},
										}}
									/>
									<PriceList>
										<PriceItem>
											<span>Total Price</span> <span>$ {totalPrice}</span>
										</PriceItem>
										<PriceItem>
											<span>Price discount</span> <span>$95</span>
										</PriceItem>
										<PriceItem>
											<span>Coupon Discount</span> <span>$95</span>
										</PriceItem>
										<PriceItem>
											<span>Order Total</span> <span>$95</span>
										</PriceItem>
										<PriceItem>
											<span>Delivery Charge</span> <span>$95</span>
										</PriceItem>
									</PriceList>
									<Button
										size="large"
										onClick={handleStep}
										overrides={{
											BaseButton: {
												style: ({ $theme }) => {
													return {
														width: '100%',
														...$theme.typography.font250,
													};
												},
											},
										}}
									>
										Next
									</Button>
								</Block>
							</Cell>
						)}
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Checkout;
