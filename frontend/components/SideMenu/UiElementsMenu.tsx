import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from './SideMenu.styled';

const menuItems = [
	{
		id: 1,
		label: 'Badge',
		path: '/uielements',
	},
	{
		id: 2,
		label: 'Page Title',
		path: '/uielements/page-title',
	},
	{
		id: 3,
		label: 'Widget Card',
		path: '/uielements/widget-card',
	},
	{
		id: 4,
		label: 'Carousel',
		path: '/uielements/carousel',
	},
	{
		id: 5,
		label: 'Cart Product',
		path: '/uielements/cart-product',
	},
	{
		id: 6,
		label: 'Instagram Card',
		path: '/uielements/instagram-card',
	},
	{
		id: 7,
		label: 'Product Card',
		path: '/uielements/product-card',
	},
	{
		id: 8,
		label: 'Pricing Card',
		path: '/uielements/pricing-card',
	},
	{
		id: 9,
		label: 'List Grid Card',
		path: '/uielements/listgrid-card',
	},
];

type MenuProps = {
	className?: string;
	onClick?: () => void;
};

const UiElementsMenu = ({ className = '', onClick }: MenuProps) => {
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

export default UiElementsMenu;
