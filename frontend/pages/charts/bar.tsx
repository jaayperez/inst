import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const Bar: NextPage<{}> = () => {
	const [state, setState] = useState<any>({
		series: [
			{
				name: 'Marine Sprite',
				data: [44, 55, 41, 37, 22, 43, 21],
			},
			{
				name: 'Striking Calf',
				data: [53, 32, 33, 52, 13, 43, 32],
			},
			{
				name: 'Tank Picture',
				data: [12, 17, 11, 9, 15, 11, 20],
			},
			{
				name: 'Bucket Slope',
				data: [9, 7, 5, 8, 6, 9, 4],
			},
			{
				name: 'Reborn Kid',
				data: [25, 12, 19, 32, 25, 24, 10],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 420,
				stacked: true,
				toolbar: false,
			},
			title: {
				text: 'Bar Chart',
				align: 'left',
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#ffffff'],
			},
			xaxis: {
				categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
				labels: {
					formatter: function(val: number) {
						return val + 'K';
					},
				},
			},
			tooltip: {
				y: {
					formatter: function(val: number) {
						return val + 'K';
					},
				},
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'center',
				offsetY: -8,
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

export default Bar;
