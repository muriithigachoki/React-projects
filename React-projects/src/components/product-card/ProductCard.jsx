import {
  CardBody,
  Image,
  Card,
  RadioGroup,
  Radio,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import blackShoe from "../../../src/assets/blackShoe.jpg";
import redshoe from "../../../src/assets/redshoe.jpg";
import yellowshoe from "../../../src/assets/yellowshoe.jpg";

const ProductCard = ({ product }) => {
  const [color, setColor] = useState("black");
  const [image, setImage] = useState(blackShoe);

  const handleChange = (checkedColor) => {
    setColor(checkedColor);
  };

  return (
    <Card height="300px" bg={color} overflow="hidden">
      <Image src={image} height="200px" objectFit="cover" />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <Heading size={3}>{product.title}</Heading>
        </HStack>
        <RadioGroup defaultValue="black">
          <HStack>
            <Radio
              value="black"
              onChange={() => {
                handleChange("black");
                setImage(blackShoe);
              }}
            >
              Black
            </Radio>
            <Radio
              value="red"
              onChange={() => {
                handleChange("red");
                setImage(redshoe);
              }}
            >
              Red
            </Radio>
            <Radio
              value="yellow"
              onChange={() => {
                handleChange("yellow");
                setImage(yellowshoe);
              }}
            >
              Yellow
            </Radio>
          </HStack>
        </RadioGroup>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
