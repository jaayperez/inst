import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from './SideMenu.styled';

const menuItems = [
	{
		id: 1,
		label: 'Line',
		path: '/charts',
	},
	{
		id: 2,
		label: 'Area',
		path: '/charts/area',
	},
	{
		id: 3,
		label: 'Column',
		path: '/charts/column',
	},
	{
		id: 4,
		label: 'Bar',
		path: '/charts/bar',
	},
	{
		id: 5,
		label: 'Mixed',
		path: '/charts/mixed',
	},
	{
		id: 6,
		label: 'Pie',
		path: '/charts/pie',
	},
	{
		id: 7,
		label: 'Radar',
		path: '/charts/radar',
	},
	{
		id: 8,
		label: 'Product View',
		path: '/charts/product-view',
	},
	{
		id: 9,
		label: 'Cash Flow',
		path: '/charts/cash-flow',
	},
];

type MenuProps = {
	className?: string;
	onClick?: () => void;
};

const ChartMenu = ({ className = '', onClick }: MenuProps) => {
	const { pathname } = useRouter();
	const newpathname = pathname.split('/').slice(2, 3);
	const mainpath = `/${newpathname[0]}`;

	return (
		<Sticky top=".navbar" innerZ="1">
			<MenuWrapper className="side-menu-wrapper">
				<Menu className={`side-menu ${className}`}>
					{menuItems.map((item) => {
						const menupathname = item.path.split('/').slice(2, 3);
						const menupath = `/${menupathname[0]}`;

						return (
							<MenuItem key={`side-menu--key${item.id}`} onClick={onClick}>
								<Link href={item.path}>
									<MenuLink className={mainpath === menupath ? 'active' : ''}>
										{item.label}
									</MenuLink>
								</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</MenuWrapper>
		</Sticky>
	);
};

export default ChartMenu;
