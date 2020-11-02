import React from 'react';
import { useRouter } from 'next/router';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import CartProduct from '../../components/UiElements/CartProduct/CartProduct';
import SvgIcon from '../../components/UiElements/SvgIcon/SvgIcon';
import {
  Header,
  Title,
  Price,
  Message,
  Strong,
} from '../../components/PageStyles/Checkout.styled';
import { calcCartItemsTotal } from '../../contexts/cart/cart.utils';
import { useCartDispatch } from '../../contexts/cart/cart.provider';

type CartType = {
  products: {
    id?: string;
    thumbnail?: string;
    name?: string;
    quantity?: string;
    price?: string;
    color?: any;
  }[];
};

const Cart = ({ products }: CartType) => {
  const totalPrice = calcCartItemsTotal(products);
  const dispatch = useCartDispatch();
  const router = useRouter();
  return (
    <>
      <Header>
        <Title>My Shopping Bag</Title>
        <Price>Total: $ {totalPrice}</Price>
      </Header>
      {products.length > 0 ? (
        <>
          {products.map(product => (
            <CartProduct
              key={`checkout-product--key${product.id}`}
              thumbUrl={product.thumbnail}
              title={product.name}
              price={product.price}
              quantity={`Qty ${product.quantity}`}
              color={product.color}
              removable={true}
              onClick={() =>
                dispatch({ type: 'CLEAR_ITEM_FROM_CART', payload: product })
              }
            />
          ))}
        </>
      ) : (
        <Block paddingTop="30px" paddingBottom="30px">
          <Button onClick={() => router.push('/shop')}>Back to shop</Button>
        </Block>
      )}

      <Block
        marginTop={['30px', '40px']}
        paddingTop="25px"
        paddingRight="25px"
        paddingBottom="25px"
        paddingLeft="25px"
        overrides={{
          Block: {
            style: ({ $theme }) => {
              return {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: $theme.colors.backgroundSecondary,
              };
            },
          },
        }}
      >
        <SvgIcon src={require('../../assets/images/truck.svg?include')} />
        <Message>
          <Strong>Free Delivery</Strong> on this order
        </Message>
      </Block>
    </>
  );
};

export default Cart;
