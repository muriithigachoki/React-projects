import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Item } from "../../App";

interface Props {
  item: Item;
}

const Cart = ({ item }: Props) => {
  return (
    <>
      <Card>
        <Image src={item.imageUrl} height="100px" width="100px" />
        <CardBody>
          <Heading> Cart</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default Cart;
