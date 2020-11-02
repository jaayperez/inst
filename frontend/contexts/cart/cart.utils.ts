export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: any) => cartItem.id !== cartItemToRemove.id
    );
  }
  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export function calcCartItemsTotal(cartItems: any) {
  return cartItems.reduce(
    (prev: any, cur: any) => prev + cur.quantity * cur.price,
    0
  );
}
// addToCart = () => {
//   let cart = localStorage.getItem('cart')
//                 ? JSON.parse(localStorage.getItem('cart')) : {};
//   let id = this.props.product.id.toString();
//   cart[id] = (cart[id] ? cart[id]: 0);
//   let qty = cart[id] + parseInt(this.state.quantity);
//   if (this.props.product.available_quantity < qty) {
//     cart[id] = this.props.product.available_quantity;
//   } else {
//     cart[id] = qty
//   }
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// componentDidMount() {
//   let cart = localStorage.getItem('cart');
//   if (!cart) return;
//   getCartProducts(cart).then((products) => {
//     let total = 0;
//     for (var i = 0; i < products.length; i++) {
//       total += products[i].price * products[i].qty;
//     }
//     this.setState({ products, total });
//     });
// }
// removeFromCart = (product) => {
//   let products = this.state.products.filter((item) => item.id !== product.id);
//   let cart = JSON.parse(localStorage.getItem('cart'));
//   delete cart[product.id.toString()];
//   localStorage.setItem('cart', JSON.stringify(cart));
//   let total = this.state.total - (product.qty * product.price)
//   this.setState({products, total});
// }
// clearCart = () => {
//   localStorage.removeItem('cart');
//   this.setState({products: []});
// }
