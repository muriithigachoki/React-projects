import { useContext } from "react";
import cartContext from "./contexts/cartContext";

const useCart = () => useContext(cartContext);

export default useCart;
