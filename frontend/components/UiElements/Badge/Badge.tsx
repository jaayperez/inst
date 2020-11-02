import React from 'react';
import Link from 'next/link';
import Wrapper, { Count } from './Badge.style';

type BadgeProps = {
  path?: string;
  count: number;
  icon: React.ReactNode;
  color?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Badge = ({
  path,
  icon,
  count,
  color,
  bgColor,
  style,
  onClick,
}: BadgeProps) => {
  return (
    <Link href={path ? path : ''}>
      <Wrapper className="badge" style={style} onClick={onClick}>
        {icon}
        <Count $color={color && color} $bgColor={bgColor && bgColor}>
          {count}
        </Count>
      </Wrapper>
    </Link>
  );
};

export default Badge;
