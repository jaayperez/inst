import React from 'react';
import Wrapper, {
  Image,
  Content,
  Header,
  Title,
  Price,
  Quantity,
  Footer,
  Color,
  Button,
} from './CartProduct.styled';

type CartProductType = {
  thumbUrl?: string;
  title?: string;
  quantity?: string;
  price?: string;
  color?: string;
  removable?: boolean;
  hideBorderBottom?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const CartProduct = ({
  thumbUrl,
  title,
  quantity,
  price,
  color,
  onClick,
  removable,
  hideBorderBottom,
  style,
}: CartProductType) => {
  return (
    <Wrapper $hideBorderBottom={hideBorderBottom} style={{ style }}>
      <Image>
        <img src={thumbUrl} alt={title} />
      </Image>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Price>$ {price}</Price>
        </Header>
        <Quantity>{quantity}</Quantity>
        <Footer>
          {removable && <Button onClick={onClick}>Remove</Button>}
          {color && <Color>Color {color}</Color>}
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default CartProduct;
