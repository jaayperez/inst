import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Container from 'components/UiElements/Container/Container';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import { withApollo } from 'apollo/client';
import Loader from 'components/UiElements/Loader/Loader';

const GET_INVOICE = gql`
	query GetInvoice($id: ID!) {
		invoice(id: $id) {
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
				unit
				unitPrice
			}
			total
			status
			createdAt
		}
	}
`;

export default withApollo(function InvoiceDetail() {
	const {
		push,
		query: { id },
	} = useRouter();
	const { data, loading, error } = useQuery(GET_INVOICE, { variables: { id } });
	if (loading)
		return (
			<Container>
				<Loader />
			</Container>
		);

	return (
		<>
			<Head>
				<title>View Invoice {id} | INST.</title>
				<meta name="Description" content="Inst view a invoice" />
			</Head>
			<Container>
				<Block
					paddingTop={['15px', '20px', '30px', '40px']}
					paddingBottom="30px"
					overrides={{
						Block: {
							style: {
								display: 'flex',
								justifyContent: 'flex-end',
								'@media only screen and (max-width: 375px)': {
									flexWrap: 'wrap',
									flexDirection: 'column',
									justifyContent: 'flex-start',
								},
							},
						},
					}}
				>
					<Button
						onClick={() => push('/apps/invoice/')}
						kind={'secondary'}
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
						Go To Invoice
					</Button>
					<Button
						onClick={() => alert('click')}
						kind={'secondary'}
						overrides={{
							BaseButton: {
								style: ({ $theme }) => {
									return {
										...$theme.typography.font250,
										marginLeft: '15px',
										marginRight: '15px',
										'@media only screen and (max-width: 375px)': {
											marginLeft: '0',
											marginRight: '0',
											marginTop: '15px',
											marginBottom: '15px',
										},
									};
								},
							},
						}}
					>
						Download Invoice
					</Button>
					<Button
						onClick={() => push('/apps/invoice/add')}
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

				<Block
					paddingTop="33px"
					paddingBottom="30px"
					overrides={{
						Block: {
							style: ({ $theme }) => {
								return {
									display: 'flex',
									justifyContent: 'space-between',
									borderTopWidth: '2px',
									borderTopStyle: 'dashed',
									borderTopColor: $theme.colors.backgroundTertiary,
								};
							},
						},
					}}
				>
					<Block>
						<Block
							as="h4"
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											...$theme.typography.LabelLarge,
											color: $theme.colors.primaryA,
										};
									},
								},
							}}
						>
							Bill From
						</Block>
						<Block
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											color: $theme.colors.contentSecondary,
											lineHeight: 2,
											paddingTop: '10px',
										};
									},
								},
							}}
						>
							{data.invoice.vendor.name}
							<br />
							{data.invoice.vendor.address}
						</Block>
					</Block>
					<Block
						overrides={{
							Block: {
								style: {
									textAlign: 'right',
								},
							},
						}}
					>
						<Block
							as="h4"
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											...$theme.typography.LabelLarge,
											color: $theme.colors.primaryA,
										};
									},
								},
							}}
						>
							Bill To
						</Block>
						<Block
							overrides={{
								Block: {
									style: ({ $theme }) => {
										return {
											color: $theme.colors.contentSecondary,
											lineHeight: 2,
											paddingTop: '10px',
										};
									},
								},
							}}
						>
							{data.invoice.customer.name}
							<br />
							{data.invoice.customer.address}
						</Block>
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
					<StyledTable $gridTemplateColumns="auto auto auto auto auto">
						<StyledTableHeadAlt>Number</StyledTableHeadAlt>
						<StyledTableHeadAlt>Item Name</StyledTableHeadAlt>
						<StyledTableHeadAlt>Unit Costs</StyledTableHeadAlt>
						<StyledTableHeadAlt>Unit</StyledTableHeadAlt>
						<StyledTableHeadAlt>Price</StyledTableHeadAlt>

						{data.invoice.items.map((item: any, index: number) => {
							const striped = index % 2 === 0;

							return (
								<React.Fragment key={`invoice-item--key${item.id}`}>
									<StyledBodyCell $striped={striped}>{item.id}</StyledBodyCell>
									<StyledBodyCell $striped={striped}>
										{item.name}
									</StyledBodyCell>
									<StyledBodyCell $striped={striped}>
										$ {item.unitPrice}
									</StyledBodyCell>
									<StyledBodyCell $striped={striped}>
										{item.unit}
									</StyledBodyCell>
									<StyledBodyCell $striped={striped}>
										$ {item.unit * item.unitPrice}
									</StyledBodyCell>
								</React.Fragment>
							);
						})}
					</StyledTable>
				</Block>

				<Block
					as="h3"
					overrides={{
						Block: {
							style: ({ $theme }) => {
								return {
									...$theme.typography.LabelLarge,
									color: $theme.colors.primaryA,
									textAlign: 'right',
									paddingTop: '30px',
								};
							},
						},
					}}
				>
					Grand Total: &nbsp;&nbsp; $ {data.invoice.total}
				</Block>
			</Container>
		</>
	);
});
