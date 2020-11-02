import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const Mixed: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		series: [
			{
				name: 'Product A',
				type: 'column',
				data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
			},
			{
				name: 'Product B',
				type: 'area',
				data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
			},
			{
				name: 'Product C',
				type: 'line',
				data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
			},
		],
		options: {
			chart: {
				height: 420,
				type: 'line',
				stacked: false,
				toolbar: false,
			},
			title: {
				text: 'Mixed Chart',
				align: 'left',
			},
			colors: ['#006ff3', '#39a66d', '#ff0080'],
			stroke: {
				width: [0, 2, 5],
				curve: 'smooth',
			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
				},
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'center',
				offsetY: -5,
			},
			fill: {
				opacity: [0.85, 0.25, 1],
				gradient: {
					inverseColors: false,
					shade: 'light',
					type: 'vertical',
					opacityFrom: 0.85,
					opacityTo: 0.55,
					stops: [0, 100, 100, 100],
				},
			},
			labels: [
				'01/01/2003',
				'02/01/2003',
				'03/01/2003',
				'04/01/2003',
				'05/01/2003',
				'06/01/2003',
				'07/01/2003',
				'08/01/2003',
				'09/01/2003',
				'10/01/2003',
				'11/01/2003',
			],
			markers: {
				size: 0,
			},
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				title: {
					text: 'Sales',
				},
				min: 0,
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function(y: any) {
						if (typeof y !== 'undefined') {
							return y.toFixed(0) + ' Sales';
						}
						return y;
					},
				},
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
									type="line"
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

export default Mixed;
