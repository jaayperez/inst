import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Container from 'components/UiElements/Container/Container';
import Product from 'components/UiElements/ProductCard/ProductCard';

import { productCardPropsData } from '../../data/uiElementsApiData';

const ProductCard: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>UiElements | INST.</title>
				<meta name="Description" content="Inst calendar app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<UiElementsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<Block
									as="h2"
									paddingBottom="20px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font650,
													color: $theme.colors.primaryA,
												};
											},
										},
									}}
								>
									ProductCard
								</Block>

								<Block paddingBottom="30px">
									<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
										<Cell span={[12, 6, 4]}>
											<Product
												as="#"
												href="#"
												thumb="https://s3.amazonaws.com/redqteam.com/inst/shop/1.jpg"
												title="Invertocat Mug"
												price="20"
											/>
										</Cell>
									</Grid>
								</Block>

								<Block
									as="h2"
									paddingBottom="10px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font650,
													color: $theme.colors.primaryA,
												};
											},
										},
									}}
								>
									API
								</Block>

								<Block
									as="p"
									paddingBottom="30px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font200,
													color: $theme.colors.borderInverseOpaque,
												};
											},
										},
									}}
								>
									To get a customized ProductCard, set alignItem prop.
								</Block>

								<Block
									overrides={{
										Block: {
											style: {
												minHeight: '150px',
											},
										},
									}}
								>
									<StyledTable $gridTemplateColumns="150px 250px auto auto auto">
										<StyledTableHeadAlt>Property</StyledTableHeadAlt>
										<StyledTableHeadAlt>Description</StyledTableHeadAlt>
										<StyledTableHeadAlt>Type</StyledTableHeadAlt>
										<StyledTableHeadAlt>Default</StyledTableHeadAlt>
										<StyledTableHeadAlt>Version</StyledTableHeadAlt>
										{productCardPropsData.map((item, index) => {
											const striped = index % 2 === 0;
											return (
												<Fragment key={index}>
													<StyledBodyCell $striped={striped}>
														{item.property}
													</StyledBodyCell>
													<StyledBodyCell
														$striped={striped}
														dangerouslySetInnerHTML={{
															__html: item.description,
														}}
													></StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														<code>{item.type}</code>
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.default}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.version && item.version}
													</StyledBodyCell>
												</Fragment>
											);
										})}
									</StyledTable>
								</Block>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default ProductCard;
