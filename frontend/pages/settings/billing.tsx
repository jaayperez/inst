import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { MdCloudDownload } from 'react-icons/md';
import Container from 'components/UiElements/Container/Container';
import SettingsMenu from 'components/SideMenu/SettingsMenu';
import SvgIcon from 'components/UiElements/SvgIcon/SvgIcon';
import { TextButton } from 'components/PageStyles/Settings.styled';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';

import billingPageData from '../../data/billingPage';

const Billing: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>Billing | INST.</title>
				<meta name="Description" content="Inst billing setting page" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<SettingsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block
								paddingTop={['10px', '20px', '30px', '0']}
								overrides={{ Block: { style: { minHeight: '150px' } } }}
							>
								<StyledTable $gridTemplateColumns="max-content auto auto auto max-content">
									<StyledTableHeadAlt>ID</StyledTableHeadAlt>
									<StyledTableHeadAlt>Date</StyledTableHeadAlt>
									<StyledTableHeadAlt>Payment method</StyledTableHeadAlt>
									<StyledTableHeadAlt>Amount</StyledTableHeadAlt>
									<StyledTableHeadAlt>Receipt</StyledTableHeadAlt>
									{billingPageData.map((item, index) => {
										const striped = index % 2 === 0;
										return (
											<Fragment key={index}>
												<StyledBodyCell $striped={striped}>
													<SvgIcon
														src={require('../../assets/images/check.svg?include')}
													/>{' '}
													{item.id}
												</StyledBodyCell>
												<StyledBodyCell $striped={striped}>
													{item.date}
												</StyledBodyCell>
												<StyledBodyCell $striped={striped}>
													{item.paymentMethod}
												</StyledBodyCell>
												<StyledBodyCell $striped={striped}>
													{item.price}
												</StyledBodyCell>
												<StyledBodyCell $striped={striped}>
													<TextButton onClick={() => alert('click')}>
														<MdCloudDownload size="1.2rem" color="#545454" />
													</TextButton>
												</StyledBodyCell>
											</Fragment>
										);
									})}
								</StyledTable>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Billing;
