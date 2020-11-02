import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { Button } from 'baseui/button';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Container from 'components/UiElements/Container/Container';
import Carousel from 'components/UiElements/Carousel/Carousel';

import { carouselPropsData } from '../../data/uiElementsApiData';

const Apps: NextPage<{}> = () => {
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
									Carousel
								</Block>

								<Block paddingBottom="50px">
									<Carousel
										carouselSelector="example"
										prevButton={
											<Button
												size="compact"
												shape="pill"
												overrides={{
													BaseButton: {
														style: ({ $theme }) => {
															return { ...$theme.typography.font150 };
														},
													},
												}}
											>
												Prev
											</Button>
										}
										nextButton={
											<Button
												size="compact"
												shape="pill"
												overrides={{
													BaseButton: {
														style: ({ $theme }) => {
															return { ...$theme.typography.font150 };
														},
													},
												}}
											>
												Next
											</Button>
										}
									>
										<Block
											overrides={{
												Block: {
													style: ({ $theme }) => {
														return {
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															minHeight: '200px',
															backgroundColor:
																$theme.colors.backgroundSecondary,
														};
													},
												},
											}}
										>
											Slide 1
										</Block>
										<Block
											overrides={{
												Block: {
													style: ({ $theme }) => {
														return {
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															minHeight: '200px',
															backgroundColor:
																$theme.colors.backgroundSecondary,
														};
													},
												},
											}}
										>
											Slide 2
										</Block>
										<Block
											overrides={{
												Block: {
													style: ({ $theme }) => {
														return {
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															minHeight: '200px',
															backgroundColor:
																$theme.colors.backgroundSecondary,
														};
													},
												},
											}}
										>
											Slide 3
										</Block>
									</Carousel>
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
									To get a customized carousel, just set
									options/controls/thumbs/bullets/numberOfBullets.{' '}
									<strong>Note:</strong> It's requried some custom style to
									match your design.
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
										{carouselPropsData.map((item, index) => {
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
														{item.type}
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

export default Apps;
