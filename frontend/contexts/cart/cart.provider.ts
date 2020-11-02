import { createCtxWithReducer } from '../context.utils';
import cartReducer, { initialState } from './cart.reducer';
const [useCartState, useCartDispatch, CartProvider] = createCtxWithReducer(
  cartReducer,
  initialState
);

export { useCartState, useCartDispatch, CartProvider };

// example usage inside a component
// function Counter() {
//   const { state, dispatch } = React.useContext(CountContext);
//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'add', payload: 5 })}>+5</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'minus', payload: 5 })}>
//         +5
//       </button>
//     </div>
//   );
// }
