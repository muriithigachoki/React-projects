import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import useCart from "./useCart";

const CartGrid = () => {
  const { cart, dispatch } = useCart();
  return (
    <SimpleGrid padding="10px">
      {cart.map((item) => (
        <Card>
          <Image src={item.imageUrl} width="70px" height="70px" />
          <HStack>
            <CardBody>
              <Heading fontSize="15px">{item.title}</Heading>
              <HStack>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => dispatch({ type: "ADD", product: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => dispatch({ type: "DECREMENT", product: item })}
                >
                  -
                </button>
              </HStack>
            </CardBody>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "REMOVE", product: item })}
            >
              Delete
            </button>
          </HStack>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CartGrid;
