import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ProductViews from 'containers/Widgets/ProductViews';

const ProductView: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		categories: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
		],
		products: [
			160,
			155,
			141,
			167,
			122,
			143,
			113,
			123,
			120,
			120,
			120,
			120,
			160,
			155,
			141,
			167,
			122,
			143,
			113,
			123,
			130,
			140,
			120,
			170,
		],
		views: [
			140,
			123,
			120,
			118,
			113,
			127,
			144,
			155,
			141,
			167,
			122,
			143,
			140,
			123,
			120,
			118,
			113,
			127,
			144,
			155,
			141,
			167,
			122,
			143,
		],
	});

	return (
		<>
			<Head>
				<title>Chart | INST.</title>
				<meta name="Description" content="Inst chart app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<ChartMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<ProductViews
									title="Product View"
									categories={state.categories}
									products={state.products}
									views={state.views}
									height="420"
								/>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default ProductView;
