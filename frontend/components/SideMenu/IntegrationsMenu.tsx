import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem } from './SideMenu.styled';

const menuItems = [
	{
		id: 1,
		label: 'All',
	},
	{
		id: 2,
		label: 'Featured',
	},
	{
		id: 3,
		label: 'Performance',
	},
	{
		id: 4,
		label: 'Integrations',
	},
];

type MenuProps = {
	className?: string;
	onClick: Function;
};

const IntegrationsMenu = ({ className = '', onClick }: MenuProps) => {
	const [activated, setActivated] = useState('all');

	const handleMenu = (item: string) => {
		const label = item.toLowerCase();
		setActivated(label);
		onClick(label);
	};

	return (
		<Sticky top=".navbar" innerZ="1">
			<MenuWrapper className="side-menu-wrapper">
				<Menu className={`side-menu alt ${className}`}>
					{menuItems.map((item) => (
						<MenuItem
							key={`side-menu--key${item.id}`}
							className={activated === item.label.toLowerCase() ? 'active' : ''}
							onClick={() => handleMenu(item.label)}
							style={{ cursor: 'pointer' }}
						>
							{item.label}
						</MenuItem>
					))}
				</Menu>
			</MenuWrapper>
		</Sticky>
	);
};

export default IntegrationsMenu;
