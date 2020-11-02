import React from 'react';
import Link from 'next/link';
import Image from '../Image/Image';
import { Product, ImageWrapper, Title, Price } from './ProductCard.styled';

type ProductCardType = {
  href?: any;
  as?: string;
  thumb?: string;
  title?: string;
  price?: string;
  alignItem?: string;
};

const ProductCard = ({
  href,
  as,
  thumb,
  title,
  price,
  alignItem,
}: ProductCardType) => {
  return (
    <Link href={href} as={as}>
      <Product className="product" $alignItem={alignItem}>
        <ImageWrapper>
          <Image url={thumb} alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Product>
    </Link>
  );
};

export default ProductCard;
