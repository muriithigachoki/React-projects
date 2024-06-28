import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";


const SearchInput = ({onsearch}) => {

    const searchRef = useRef(null)

  return (
    <form input
      onSubmit={(event) => {
        event.preventDefault();
        if(searchRef.current) onsearch(searchRef.current.value)
      }}
    >
      <InputGroup>
        <Input
        ref={searchRef}
          borderRadius={20}
          placeholder="search items..."
          variant="fille"
        />
        <InputLeftElement children={<BsSearch />} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
