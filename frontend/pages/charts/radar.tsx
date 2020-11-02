import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const Radar: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		series: [
			{
				name: 'Series 1',
				data: [20, 100, 40, 30, 50, 80, 33],
			},
		],
		options: {
			chart: {
				height: 420,
				type: 'radar',
			},
			dataLabels: {
				enabled: true,
			},
			plotOptions: {
				radar: {
					size: 140,
					polygons: {
						strokeColor: '#e9e9e9',
						fill: {
							colors: ['#f8f8f8', '#fff'],
						},
					},
				},
			},
			title: {
				text: 'Radar with Polygon Fill',
			},
			colors: ['#FF4560'],
			markers: {
				size: 4,
				colors: ['#fff'],
				strokeColor: '#FF4560',
				strokeWidth: 2,
			},
			tooltip: {
				y: {
					formatter: function(val: number) {
						return val;
					},
				},
			},
			xaxis: {
				categories: [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
				],
			},
			yaxis: {
				tickAmount: 7,
				labels: {
					formatter: function(val: number, i: number) {
						if (i % 2 === 0) {
							return val;
						} else {
							return '';
						}
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
									type="radar"
									height={420}
								/>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Radar;
