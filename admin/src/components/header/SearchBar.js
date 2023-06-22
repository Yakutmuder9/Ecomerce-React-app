import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export const SearchBar = (props) => {
  const { variant, children, ...rest } = props;
  const searchIconColor = "gray.700";
  const inputBg = "gray.800";

  return (
    <InputGroup bg={"white"} borderRadius="15px" w="200px">
      <InputLeftElement
        children={
          <IconButton
            bg="inherit"
            borderRadius="inherit"
            _hover="none"
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={<BiSearch color={searchIconColor} w="15px" h="15px" />}
          ></IconButton>
        }
      />
      <Input
        fontSize="medium"
        py="14px"
        placeholder="Type here..."
        borderRadius="inherit"
      />
    </InputGroup>
  );
};
