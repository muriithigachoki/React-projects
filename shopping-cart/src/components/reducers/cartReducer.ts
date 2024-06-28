export interface Item {
  productID: number;
  title: string;
  imageUrl: string;
  quantity: number;
}

export interface CartAction {
  type: "ADD" | "DECREMENT" | "REMOVE";
  product: Item;
}

const cartReducer = (cart: Item[], action: CartAction) => {
  const existingProductIndex = cart.findIndex(
    (item) => item.productID === action.product.productID
  );
  if (action.type === "ADD") {
    // Check if the item exists in the cart

    if (existingProductIndex >= 0) {
      // If it exists, increment the quantity
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return updatedCart;
    } else {
      return [...cart, { ...action.product, quantity: 1 }];
    }
  }
  if (action.type === "DECREMENT") {
    if (existingProductIndex >= 0) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : cart.filter(
                (item) => item.productID !== action.product.productID
              );
        }
      });
      return updatedCart;
    }
  }

  if (action.type === "REMOVE") {
    return cart.filter((item) => item.productID !== action.product.productID);
  }
  return cart;
};

export default cartReducer;
