import React from 'react';
import DefaultHeader from './DefaultHeader/DefaultHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import HeaderWrapper, { HideInMobile, ShowInMobile } from './Header.styled';

const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <HideInMobile>
        <DefaultHeader />
      </HideInMobile>
      <ShowInMobile>
        <MobileHeader />
      </ShowInMobile>
    </HeaderWrapper>
  );
};

export default Header;
