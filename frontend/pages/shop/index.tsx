import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { useQuery, gql } from '@apollo/client';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Container from 'components/UiElements/Container/Container';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import ProductCard from 'components/UiElements/ProductCard/ProductCard';
import { withApollo } from '../../apollo/client';

const GET_PRODUCTS = gql`
	query getProducts($limit: Int, $offset: Int) {
		products(limit: $limit, offset: $offset) {
			items {
				id
				name
				slug
				price
				thumbnail
			}
			total
			hasMore
		}
	}
`;

const TITLE = 'Shopping Store';
const SUB_TITLE = 'Awesome GitHub T-shirts and other cool swag';

const Shop: NextPage<{}> = () => {
	const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
		notifyOnNetworkStatusChange: true,
	});

	if (error) {
		return <div>Error! {error.message}</div>;
	}

	if (!data) return null;
	const { items, total } = data.products;

	function loadMore() {
		fetchMore({
			variables: {
				offset: data.products.items.length,
			},
		});
	}

	return (
		<>
			<Head>
				<title>Shop | INST.</title>
				<meta name="Description" content="Inst shop page" />
			</Head>

			<PageTitle title={TITLE} subtitle={SUB_TITLE} />

			<Container>
				<Block paddingBottom="20px">
					<img
						src={require('../../assets/images/shop-banner.png')}
						width="100%"
						alt="Banner"
					/>
				</Block>

				<Grid gridColumns={12} gridGutters={16} gridMargins={0}>
					{items.map((item: any) => (
						<Cell span={[12, 4, 4]} key={`product-key${item.id}`}>
							<ProductCard
								href={`/shop/[slug]`}
								as={`/shop/${item.slug}`}
								thumb={item.thumbnail}
								title={item.name}
								price={item.price}
							/>
						</Cell>
					))}
				</Grid>

				<Block
					paddingTop={['30px', '30px', '40px', '50px']}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					{total > items.length ? (
						<Button
							isLoading={loading}
							onClick={loadMore}
							kind="secondary"
							size="large"
							overrides={{
								BaseButton: {
									style: ({ $theme }) => {
										return {
											height: '48px',
											...$theme.typography.font250,
										};
									},
								},
							}}
						>
							Load more {total - items.length} products
						</Button>
					) : (
						'No more product'
					)}
				</Block>
			</Container>
		</>
	);
};

export default withApollo(Shop);
