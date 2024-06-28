import React from "react";
import {
  HStack,
  RadioGroup,
  Radio,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const FilterComponent = ({ filterByCategory, handleSearch }) => {
  return (
    <>
      <InputGroup>
        <Input
          borderRadius={20}
          placeholder="search items..."
          variant="fille"
          onChange={handleSearch}
        />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>
      <RadioGroup onChange={filterByCategory}>
        <HStack>
          <Radio value="Books">Books</Radio>
          <Radio value="Electronics">Electronics</Radio>
          <Radio value="Clothing">Clothing</Radio>
        </HStack>
      </RadioGroup>
    </>
  );
};

export default FilterComponent;
