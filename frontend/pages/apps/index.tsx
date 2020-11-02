import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import AppsMenu from 'components/SideMenu/AppsMenu';
import Calendar from 'containers/Calendar';

const Apps: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>Calendar | INST.</title>
				<meta name="Description" content="Inst calendar app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<AppsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block
								paddingTop={['10px', '20px', '30px', '0']}
								minHeight="500px"
								height="100%"
								maxHeight="700px"
							>
								<Calendar />
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Apps;
