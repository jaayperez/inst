import React, { useState, Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Container from 'components/UiElements/Container/Container';
import ListGrid from 'components/UiElements/ListGridCard/ListGridCard';

import { listGridCardPropsData } from '../../data/uiElementsApiData';

const ListGridCard: NextPage<{}> = () => {
	const [loading, setLoading] = useState(false);
	const [installed, setInstalled] = useState(false);

	const handleInstall = () => {
		setLoading(true);
		setTimeout(() => {
			setInstalled(!installed);
			setLoading(false);
		}, 600);
	};

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
									ListGridCard
								</Block>

								<Block
									paddingBottom="30px"
									marginLeft="-15px"
									marginRight="-15px"
								>
									<Grid gridColumns={12} gridGutters={30} gridMargins={0}>
										<Cell span={[12, 6, 5]}>
											<Block
												overrides={{
													Block: {
														style: ({ $theme }) => {
															return {
																color: $theme.colors.primaryA,
															};
														},
													},
												}}
											>
												Grid view
											</Block>
											<ListGrid
												style={{
													padding: '20px 25px 22px',
													boxShadow: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
													marginTop: '20px',
												}}
												variant="grid"
												thumb={require('../../assets/images/applications/apps/1.svg')}
												thumbHeight="60px"
												title="Slack"
												description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
												btn={
													<Button
														kind="secondary"
														size="compact"
														shape="pill"
														isLoading={loading}
														onClick={handleInstall}
														overrides={{
															BaseButton: {
																style: () => {
																	return {
																		fontSize: '14px',
																		paddingLeft: '14px',
																		paddingRight: '14px',
																		color: installed ? '#36AF00' : '#000000',
																	};
																},
															},
														}}
													>
														{installed ? (
															<>
																<FiCheck />
																&nbsp;Installed
															</>
														) : (
															<>
																<FiPlus />
																&nbsp;Add
															</>
														)}
													</Button>
												}
											/>
										</Cell>
										<Cell span={[12, 6, 7]}>
											<Block
												overrides={{
													Block: {
														style: ({ $theme }) => {
															return {
																color: $theme.colors.primaryA,
																paddingBottom: '20px',
															};
														},
													},
												}}
											>
												List view
											</Block>
											<ListGrid
												variant="list"
												thumb={require('../../assets/images/applications/apps/1.svg')}
												thumbHeight="60px"
												title="Slack"
												description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
												author="RedQ"
												authorUrl="https://redq.io/"
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
									To get a customized ListGridCard, set variant prop.
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
										{listGridCardPropsData.map((item, index) => {
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

export default ListGridCard;
