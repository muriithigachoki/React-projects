import { CardHeader } from "@chakra-ui/react";

const ProductsDetails = ({ product }) => {
  return (
    <>
      <CardHeader>{product.title}</CardHeader>
    </>
  );
};

export default ProductsDetails;
