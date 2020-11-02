import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const Column: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		series: [
			{
				name: 'Product',
				data: [28, 29, 33, 36, 32, 32, 33],
			},
			{
				name: 'View',
				data: [12, 11, 14, 18, 17, 13, 13],
			},
		],
		options: {
			chart: {
				height: 420,
				type: 'line',
				dropShadow: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			colors: ['#006ff3', '#39a66d'],
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth',
			},
			title: {
				text: 'Column Chart',
				align: 'left',
			},
			markers: {
				size: 1,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			},
			yaxis: {
				min: 5,
				max: 40,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				floating: true,
				offsetY: -25,
				offsetX: -5,
			},
		},
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
								<ApexChart
									options={state.options}
									series={state.series}
									type="bar"
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

export default Column;
