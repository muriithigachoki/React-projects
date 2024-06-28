import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import useData from "./components/products/hooks/useData";
import CartGrid from "./components/products/CartGrid";
import NavBar from "./components/products/NavBar";
import ProductGrid from "./components/products/ProductGrid";
import CartProvider from "./components/products/CartProvider";

interface AvailableColors {
  color: string;
}

export interface Product {
  productID: number;
  title: string;
  imageUrl: string;
  quantity: number;
  availableColors: AvailableColors[];
}

function App() {
  // const { cart } = useContext(CartContext);
  const { products } = useData();

  // const handleClick = (product: Product) => {
  //   setCart((prevCart) => {
  //     // Check if the item exists in the cart
  //     const existingProductIndex = prevCart.findIndex(
  //       (item) => item.id === product.id
  //     );

  //     if (existingProductIndex >= 0) {
  //       // If it exists, increment the quantity
  //       const updatedCart = prevCart.map((item, index) => {
  //         if (index === existingProductIndex) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         }
  //         return item;
  //       });
  //       return updatedCart;
  //     } else {
  //       // If it does not exist, add it to the cart with quantity set to one
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };
  return (
    <CartProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "main aside"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "ifr 500px",
          xl: "1fr 500px",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="dodgerblue" marginTop={7}>
            <h2>Cart Items</h2>
            <CartGrid />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <Flex paddingLeft={2} marginBottom={5} marginTop={5}>
              <Box marginLeft={5}>
                <ProductGrid products={products} />
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </CartProvider>
  );
}

export default App;
