import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Block } from 'baseui/block';
import { Grid, Cell } from 'baseui/layout-grid';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import Container from 'components/UiElements/Container/Container';
import PricingCard from 'components/UiElements/PricingCard/PricingCard';

import pricingPageData from '../data/pricingPage';

const Pricing: NextPage<{}> = () => {
	const { title, subtitle, plans } = pricingPageData;
	const [loading, setLoading] = useState(false);
	const [pricingPlan, setPricingPlan] = useState('Free');

	const handlePricingPlan = (type: string) => {
		setLoading(true);
		setPricingPlan(type);

		setTimeout(() => {
			setLoading(false);
		}, 600);

		console.log('Selected plan', pricingPlan);
	};

	return (
		<>
			<Head>
				<title>{title} | INST.</title>
				<meta name="Description" content="Inst pricing plan page" />
			</Head>

			<PageTitle title={title} subtitle={subtitle} />

			<Container>
				<Block marginLeft="-11px" marginRight="-11px">
					<Grid gridColumns={12} gridGutters={22} gridMargins={0}>
						{plans.map((plan) => (
							<Cell span={[12, 6, 4]} key={`pricing-plan--key${plan.id}`}>
								<PricingCard
									title={plan.title}
									type={plan.type}
									items={plan.items}
									price={plan.price}
									btn={plan.btnText}
									isLoading={loading && pricingPlan === plan.type}
									onClick={() => handlePricingPlan(plan.type)}
								/>
							</Cell>
						))}
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Pricing;
