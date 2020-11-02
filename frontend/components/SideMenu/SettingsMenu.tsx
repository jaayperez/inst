import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from './SideMenu.styled';

const menuItems = [
	{
		id: 1,
		label: 'General',
		path: '/settings',
	},
	{
		id: 2,
		label: 'Password',
		path: '/settings/password',
	},
	{
		id: 3,
		label: 'Billing',
		path: '/settings/billing',
	},
	{
		id: 4,
		label: 'Applications',
		path: '/settings/applications',
	},
];

type MenuProps = {
	className?: string;
	onClick?: () => void;
};

const SettingsMenu = ({ className = '', onClick }: MenuProps) => {
	const { pathname } = useRouter();

	return (
		<Sticky top=".navbar" innerZ="1">
			<MenuWrapper className="side-menu-wrapper">
				<Menu className={`side-menu ${className}`}>
					{menuItems.map((item) => (
						<MenuItem key={`side-menu--key${item.id}`} onClick={onClick}>
							<Link href={item.path}>
								<MenuLink className={pathname === item.path ? 'active' : ''}>
									{item.label}
								</MenuLink>
							</Link>
						</MenuItem>
					))}
				</Menu>
			</MenuWrapper>
		</Sticky>
	);
};

export default SettingsMenu;
