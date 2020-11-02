import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Select } from 'baseui/select';
import Container from 'components/UiElements/Container/Container';
import SettingsMenu from 'components/SideMenu/SettingsMenu';
import ListGridCard from 'components/UiElements/ListGridCard/ListGridCard';
import {
	Title,
	Subtitle,
	SpaceBetween,
} from '../../components/PageStyles/Settings.styled';

import applicationsPageData from '../../data/applicationsPage';

const sortOptions = [
	{ label: 'Sort by A', value: 'a' },
	{ label: 'Sort by B', value: 'b' },
	{ label: 'Sort by C', value: 'c' },
];

const Applications: NextPage<{}> = () => {
	const { title, subtitle, applications } = applicationsPageData;
	const [value, setValue] = useState([]);

	const handleSort = (e: any) => {
		setValue(e.value);
	};

	const handleRemoveAll = () => {
		console.log('Remove all');
	};

	const handleRemoveApplication = (id: string) => {
		console.log('Remove', id);
	};

	return (
		<>
			<Head>
				<title>{title} | INST.</title>
				<meta name="Description" content="Inst applications setting page" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<SettingsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<Title>{title}</Title>
								<Subtitle>{subtitle}</Subtitle>

								<SpaceBetween>
									<Select
										options={sortOptions}
										value={value}
										placeholder="Sort"
										onChange={handleSort}
										overrides={{
											Root: {
												style: () => {
													return { width: '100px' };
												},
											},
											ControlContainer: {
												style: () => {
													return {
														borderWidth: 0,
														borderTopLeftRadius: '30px',
														borderTopRightRadius: '30px',
														borderBottomRightRadius: '30px',
														borderBottomLeftRadius: '30px',
														backgroundColor: 'transparent',
													};
												},
											},
											ValueContainer: {
												style: () => {
													return { paddingLeft: 0 };
												},
											},
										}}
									/>
									<Button
										onClick={handleRemoveAll}
										kind="secondary"
										shape="pill"
										overrides={{
											BaseButton: {
												style: ({ $theme }) => {
													return {
														...$theme.typography.font250,
														minWidth: '101px',
													};
												},
											},
										}}
									>
										Remove all
									</Button>
								</SpaceBetween>

								{applications.map((item: any) => (
									<SpaceBetween key={`application-key${item.id}`}>
										<ListGridCard
											variant="list"
											thumb={item.thumb}
											title={item.title}
											description={item.description}
											author={item.author}
											authorUrl={item.authorUrl}
										/>

										<Button
											onClick={() => handleRemoveApplication(item.id)}
											kind="secondary"
											shape="pill"
											overrides={{
												BaseButton: {
													style: ({ $theme }) => {
														return {
															...$theme.typography.font250,
															minWidth: '82px',
														};
													},
												},
											}}
										>
											Remove
										</Button>
									</SpaceBetween>
								))}
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Applications;
