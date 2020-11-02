import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { FiShoppingCart } from 'react-icons/fi';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Badge from 'components/UiElements/Badge/Badge';
import Container from 'components/UiElements/Container/Container';
import {
	useThemeSwitcherCtx,
	THEME,
} from '../../contexts/theme/theme.provider';

import { badgePropsData } from '../../data/uiElementsApiData';

const Apps: NextPage<{}> = () => {
	const { theme } = useThemeSwitcherCtx();

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
									Badge
								</Block>

								<Block
									paddingBottom="50px"
									overrides={{
										Block: {
											style: { display: 'flex', alignItems: 'flex-end' },
										},
									}}
								>
									<Badge
										icon={
											<FiShoppingCart
												size={'1.2rem'}
												color={theme === THEME.light ? '#000000' : '#ffffff'}
											/>
										}
										count={9}
									/>
									<Block paddingLeft="15px" paddingRight="15px"></Block>
									<Badge
										icon={
											<FiShoppingCart
												size={'1.6rem'}
												color={theme === THEME.light ? '#000000' : '#ffffff'}
											/>
										}
										count={99}
										bgColor="#276EF1"
									/>
									<Block paddingLeft="15px" paddingRight="15px"></Block>
									<Badge
										icon={
											<FiShoppingCart
												size={'2rem'}
												color={theme === THEME.light ? '#000000' : '#ffffff'}
											/>
										}
										count={999}
										bgColor="#3AA76D"
									/>
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
									To get a customized badge, just set color/bgColor/style.
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
										{badgePropsData.map((item, index) => {
											const striped = index % 2 === 0;
											return (
												<Fragment key={index}>
													<StyledBodyCell $striped={striped}>
														{item.property}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.description}
													</StyledBodyCell>
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
