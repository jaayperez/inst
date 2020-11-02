import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { H4 } from 'baseui/typography';
import FormMenu from 'components/SideMenu/FormMenu';
import Container from 'components/UiElements/Container/Container';
import FormFormik from 'containers/Formik/Form';
const Forms: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>Forms | INST.</title>
				<meta name="Description" content="Inst forms" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<FormMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<H4 marginBottom="30px">Formik Form</H4>
								<FormFormik />
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Forms;
