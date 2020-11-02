import React from 'react';
import {
	StyledTableWrapper,
	StyledTableHead,
	StyledTableBodyCell,
} from 'components/PageStyles/Apps.styled';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

function InvoiceItemRow({
	item: { id, name, unitPrice, unit },
	onChange,
	onRemove,
}: any) {
	return (
		<>
			<StyledTableBodyCell>{id}</StyledTableBodyCell>
			<StyledTableBodyCell>
				<Input
					placeholder="Enter Name"
					name="name"
					onChange={onChange}
					value={name}
					overrides={{
						InputContainer: {
							style: () => {
								return { backgroundColor: 'transparent' };
							},
						},
					}}
				/>
			</StyledTableBodyCell>
			<StyledTableBodyCell>
				<Input
					type="number"
					name="unitPrice"
					onChange={onChange}
					value={unitPrice}
					placeholder="Enter Price"
					overrides={{
						InputContainer: {
							style: () => {
								return {
									width: '110px',
									backgroundColor: 'transparent',
								};
							},
						},
					}}
				/>
			</StyledTableBodyCell>
			<StyledTableBodyCell>
				<Input
					type="number"
					name="unit"
					onChange={onChange}
					value={unit}
					placeholder="Enter Unit"
					overrides={{
						InputContainer: {
							style: () => {
								return {
									width: '110px',
									backgroundColor: 'transparent',
								};
							},
						},
					}}
				/>
			</StyledTableBodyCell>
			<StyledTableBodyCell>{unitPrice * unit}</StyledTableBodyCell>
			<StyledTableBodyCell onClick={onRemove} $isCursor={true} $isCenter={true}>
				<FiTrash2 size="16px" />
			</StyledTableBodyCell>
		</>
	);
}

function calcLineItemsTotal(lineItems: [any]) {
	return lineItems.reduce(
		(prev: any, cur: any) => prev + cur.unit * cur.unitPrice,
		0
	);
}

export default function InvoiceItemTable({
	items,
	onAddItem,
	onItemInputChange,
	onRemove,
}: any) {
	if (!items) return null;
	const totalPrice = calcLineItemsTotal(items);
	return (
		<>
			<Block marginTop="25px">
				<StyledTableWrapper $gridTemplateColumns="auto auto auto auto auto auto">
					<StyledTableHead>S Number</StyledTableHead>
					<StyledTableHead>Item Name</StyledTableHead>
					<StyledTableHead>Unit Costs</StyledTableHead>
					<StyledTableHead>Unit</StyledTableHead>
					<StyledTableHead>Price</StyledTableHead>
					<StyledTableHead>Remove</StyledTableHead>

					{items.map((item: any, idx: number) => (
						<InvoiceItemRow
							key={idx}
							item={item}
							onChange={onItemInputChange(idx)}
							onRemove={onRemove(idx)}
						/>
					))}
				</StyledTableWrapper>
			</Block>

			<Block
				marginTop="15px"
				overrides={{
					Block: {
						style: {
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						},
					},
				}}
			>
				<Button
					kind="tertiary"
					onClick={onAddItem}
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
					<FiPlus size="1rem" />
					<Block overrides={{ Block: { style: { padding: '0 5px' } } }}>
						Add Item
					</Block>
				</Button>
				<Block
					as="p"
					overrides={{
						Block: {
							style: ({ $theme }) => {
								return {
									...$theme.typography.font250,
								};
							},
						},
					}}
				>
					${totalPrice} Total
				</Block>
			</Block>
		</>
	);
}
