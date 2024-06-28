import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/purity.webp";
import useCart from "./useCart";

const NavBar = () => {
  const { cart } = useCart();
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image
        src={logo}
        boxSize="40px"
        borderRadius="20px"
        marginTop="2px"
        marginBottom="2px"
      />
      <p>{cart.length}</p>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
