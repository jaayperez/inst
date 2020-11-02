import React from 'react';
import { Img } from 'react-image';

const Placeholder = () => (
  <img
    src={require('../../../assets/images/placeholder.jpg')}
    alt="product img loder"
  />
);

export default function Image({
  url,
  alt = 'placeholder',
  className,
  style,
}: {
  url?: string | [string];
  alt?: string;
  className?: string;
  style?: any;
}) {
  return (
    <Img
      draggable={false}
      style={style}
      src={url}
      alt={alt}
      loader={<Placeholder />}
      unloader={<Placeholder />}
      className={className}
    />
  );
}
