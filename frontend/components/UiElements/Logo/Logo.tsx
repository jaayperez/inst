import React from 'react';
import Link from 'next/link';
import Wrapper from './Logo.styled';

type LogoProps = {
  path: string | any;
  src: React.ReactNode;
  style?: React.CSSProperties;
};

const Logo = ({ path, src, style }: LogoProps) => {
  return (
    <Link href={path}>
      <Wrapper className="logo" style={style}>
        {src}
      </Wrapper>
    </Link>
  );
};

export default Logo;
