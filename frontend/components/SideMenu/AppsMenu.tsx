import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from './SideMenu.styled';

const menuItems = [
	{
		id: 1,
		label: 'Calendar',
		path: '/apps',
	},
	{
		id: 2,
		label: 'To do',
		path: '/apps/todo',
	},
	{
		id: 3,
		label: 'Firebase CRUD',
		path: '/apps/firebase-crud',
	},
	{
		id: 4,
		label: 'Invoice',
		path: '/apps/invoice',
	},
	{
		id: 5,
		label: 'Github',
		path: '/apps/github',
	},
	{
		id: 6,
		label: 'Product hunt',
		path: '/apps/product-hunt',
	},
];

type MenuProps = {
	className?: string;
	onClick?: () => void;
};

const AppsMenu = ({ className = '', onClick }: MenuProps) => {
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

export default AppsMenu;
