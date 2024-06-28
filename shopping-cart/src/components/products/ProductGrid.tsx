import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductsList from "./ProductsList";
import { Product } from "../../App";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
      padding="10px"
      spacing={6}
    >
      {products.map((product) => (
        <Box marginBottom={10}>
          <ProductsList product={product} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
