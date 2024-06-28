import { ReactNode, useReducer } from "react";
import IncDecQuantityReducer from "../reducers/IncrDecCartItemQuantity";
import CartQuantityContext from "./contexts/quantityContext";
import useCart from "./useCart";

interface Props {
  children: ReactNode;
}

const CartQuantityProvider: React.FC<Props> = ({ children }: Props) => {
  const { cart } = useCart();
  const [items, dispatch] = useReducer(IncDecQuantityReducer, cart);
  return (
    <CartQuantityContext.Provider value={{ items, dispatch }}>
      {children}
    </CartQuantityContext.Provider>
  );
};

export default CartQuantityProvider;
