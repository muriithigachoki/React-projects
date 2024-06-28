import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Product } from "../../App";
import useCart from "./useCart";

interface Props {
  product: Product;
}

const ProductsList = ({ product }: Props) => {
  const { dispatch } = useCart();
  return (
    <>
      <Card>
        <Image src={product.imageUrl} objectFit="cover" height="200px" />
        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <Heading fontSize="md">{product.title}</Heading>
          </HStack>
          <Button
            colorScheme="blue"
            onClick={() => dispatch({ type: "ADD", product })}
          >
            AddToCart
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductsList;
