import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Grid, Cell } from 'baseui/layout-grid';
import { AiFillCloseSquare } from 'react-icons/ai';
import { IoIosEye } from 'react-icons/io';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { Tag } from 'baseui/tag';
import { Button } from 'baseui/button';
import Container from 'components/UiElements/Container/Container';
import IconButton from 'components/UiElements/IconButton/IconButton';
import AppsMenu from 'components/SideMenu/AppsMenu';
import Loader from 'components/UiElements/Loader/Loader';

import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import { withApollo } from 'apollo/client';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_INVOICES = gql`
	query {
		invoices {
			id
			name
			customer {
				id
				name
				address
			}
			vendor {
				id
				name
				address
			}
			items {
				id
				name
				unitPrice
			}
			total
			status
			createdAt
		}
	}
`;

const DELETE_INVOICE = gql`
	mutation DeleteInvoice($id: String!) {
		deleteInvoice(id: $id) {
			id
			name
			customer {
				id
				name
				address
			}
			vendor {
				id
				name
				address
			}
			items {
				id
				name
				unitPrice
			}
			total
			status
			createdAt
		}
	}
`;

const TITLE = 'Invoice';
const SUB_TITLE =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';

const Invoice: NextPage<{}> = () => {
	const { data, loading, error } = useQuery(GET_INVOICES);
	const [deleteInvoice] = useMutation(DELETE_INVOICE, {
		update(cache, { data: { deleteInvoice } }) {
			const { invoices } = cache.readQuery<any>({ query: GET_INVOICES });
			cache.writeQuery({
				query: GET_INVOICES,
				data: {
					invoices: invoices.filter(
						(invoice: any) => invoice.id !== deleteInvoice.id
					),
				},
			});
		},
	});

	const router = useRouter();
	if (error) return <div>Error! ${error.message}</div>;

	function removeInvoice(id: any) {
		deleteInvoice({ variables: { id } });
	}

	return (
		<>
			<Head>
				<title>{TITLE} | INST.</title>
				<meta name="Description" content={SUB_TITLE} />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<AppsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							{!loading ? (
								<>
									<Block
										paddingTop={['10px', '15px', '30px', '0']}
										overrides={{
											Block: {
												style: {
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
													marginBottom: '40px',
												},
											},
										}}
									>
										<Block>
											<Block
												as="h3"
												overrides={{
													Block: {
														style: ({ $theme }) => {
															return {
																...$theme.typography.font450,
																color: $theme.colors.primaryA,
																marginBottom: '10px',
															};
														},
													},
												}}
											>
												{TITLE}
											</Block>
											<Block
												as="p"
												overrides={{
													Block: {
														style: ({ $theme }) => {
															return {
																...$theme.typography.font200,
																color: $theme.colors.contentSecondary,
															};
														},
													},
												}}
											>
												{SUB_TITLE}
											</Block>
										</Block>
										<Block overrides={{ Block: { style: { flexShrink: 0 } } }}>
											<Button
												onClick={() => router.push(`/apps/invoice/add`)}
												overrides={{
													BaseButton: {
														style: ({ $theme }) => {
															return {
																...$theme.typography.font250,
															};
														},
													},
												}}
											>
												Add Invoice
											</Button>
										</Block>
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
										<StyledTable $gridTemplateColumns="max-content max-content auto auto max-content max-content max-content">
											<StyledTableHeadAlt>Number</StyledTableHeadAlt>
											<StyledTableHeadAlt>Date</StyledTableHeadAlt>
											<StyledTableHeadAlt>Bill From</StyledTableHeadAlt>
											<StyledTableHeadAlt>Bill To</StyledTableHeadAlt>
											<StyledTableHeadAlt>Total Cost</StyledTableHeadAlt>
											<StyledTableHeadAlt>Status</StyledTableHeadAlt>
											<StyledTableHeadAlt>Action</StyledTableHeadAlt>
											{data?.invoices?.map((item: any, index: number) => {
												const striped = index % 2 === 0;
												const status =
													item?.status?.charAt(0).toUpperCase() +
													item?.status?.slice(1).toLowerCase();
												let tag;
												switch (item.status) {
													case 'SHIPPED':
														tag = (
															<Tag
																kind="accent"
																variant="solid"
																closeable={false}
															>
																{status}
															</Tag>
														);
														break;
													case 'PENDING':
														tag = (
															<Tag
																kind="negative"
																variant="solid"
																closeable={false}
															>
																{status}
															</Tag>
														);
														break;
													case 'DELIVERED':
														tag = (
															<Tag
																kind="positive"
																variant="solid"
																closeable={false}
															>
																{status}
															</Tag>
														);
														break;
												}
												return (
													<Fragment key={index}>
														<StyledBodyCell $striped={striped}>
															# {item.id}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															{format(new Date(item.createdAt), 'yyyy-MM-dd')}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															{item.vendor?.address}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															{item.customer?.address}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															$ {item.total}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															{tag}
														</StyledBodyCell>
														<StyledBodyCell $striped={striped}>
															<IconButton
																onClick={() =>
																	router.push(
																		'/apps/invoice/[id]',
																		`/apps/invoice/${item.id}`
																	)
																}
															>
																<IoIosEye />
															</IconButton>
															<IconButton
																onClick={() => removeInvoice(item.id)}
															>
																<AiFillCloseSquare />
															</IconButton>
														</StyledBodyCell>
													</Fragment>
												);
											})}
										</StyledTable>
									</Block>
								</>
							) : (
								<Loader />
							)}
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default withApollo(Invoice);
