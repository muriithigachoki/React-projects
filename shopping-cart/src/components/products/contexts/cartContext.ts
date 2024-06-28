import React from "react";
import { CartAction, Item } from "../../reducers/cartReducer";

interface CartContextType {
  cart: Item[];
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;
