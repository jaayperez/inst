import { addItemToCart, removeItemFromCart } from './cart.utils';

export const initialState = {
  hidden: true,
  cartItems: [],
  address: null,
};
// type State = typeof initialState;
type State = any;
type Action =
  | { type: 'TOGGLE_CART_HIDDEN' }
  | { type: 'ADD_ITEM'; payload: object }
  | { type: 'REMOVE_ITEM'; payload: object }
  | { type: 'CLEAR_ITEM_FROM_CART'; payload: any }
  | { type: 'CLEAR_CART' };
export default function cartReducer(state: State, action: Action): State {
  console.log(state, 'context state');

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: any) => cartItem.id !== action.payload.id
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
    // default: {
    //   throw new Error(`Unhandled action type: ${action.type}`);
    // }
  }
}
