import React, { ReactNode, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import CartContext from "./contexts/cartContext";

interface Props {
  children: ReactNode;
}

const CartProvider: React.FC<Props> = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
