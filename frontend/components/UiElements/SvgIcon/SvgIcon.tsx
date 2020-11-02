import React from 'react';

type SvgIconProps = {
  src: string;
  style?: React.CSSProperties;
};

const SvgIcon = ({ src, style }: SvgIconProps) => {
  return (
    <span
      style={style}
      className="svg-icon"
      dangerouslySetInnerHTML={{
        __html: src,
      }}
    ></span>
  );
};

export default SvgIcon;
