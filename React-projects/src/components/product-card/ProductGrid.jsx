import React from "react";
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";

const ProductGrid = ({ products }) => {
  return (
    <>
      <SimpleGrid columns={{ md: 2, lg: 4 }}>
        {products.map((product) => (
          <ProductCard key={product.productID} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
