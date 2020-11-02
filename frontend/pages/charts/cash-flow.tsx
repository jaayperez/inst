import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import CashFlowChart from 'containers/Widgets/CashFlow';

const CashFlow: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		categories: [
			'2017-01-01',
			'2017-02-01',
			'2018-11-01',
			'2018-12-01',
			'2019-01-01',
			'2019-02-01',
			'2019-03-01',
			'2019-04-01',
			'2019-05-01',
			'2019-06-01',
			'2019-07-01',
			'2019-08-01',
			'2019-09-01',
			'2019-10-01',
			'2019-11-01',
			'2019-12-01',
		],
		cash: [
			20.45,
			35.42,
			45.9,
			-18.1,
			-18.2,
			-14.16,
			10.34,
			30.88,
			53.07,
			25.8,
			-43.3,
			-18.6,
			-37.6,
			15.75,
			17.1,
			19.8,
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
								<CashFlowChart
									title="Cash Flow"
									categories={state.categories}
									cash={state.cash}
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

export default CashFlow;
