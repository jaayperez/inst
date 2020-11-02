import React from 'react';
import Link from 'next/link';
import Menu, { MenuItem, MenuLink } from './TopMenu.style';

const menuItems = [
  {
    id: 1,
    label: 'Blog',
    path: '#',
  },
  {
    id: 2,
    label: 'Privacy',
    path: '/privacy',
  },
  {
    id: 3,
    label: 'Terms',
    path: '/terms',
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const TopMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map(item => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <Link href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TopMenu;
