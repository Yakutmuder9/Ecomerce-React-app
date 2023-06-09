import { useState } from "react";
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BellIcon, RepeatClockIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";

let navVariants = {
  mainText: "white",
  navbarPosition: "absolute",
  navbarFilter: "none",
  navbarBackdrop: "none",
  navbarShadow: "none",
  navbarBg: "none",
  navbarBorder: "transparent",
  secondaryMargin: "0px",
  paddingX: "15px",
};
const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);
  
  
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "none";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";

  navbarPosition = "fixed";
  navbarShadow = useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none");
  navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
  navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );

  const { colorMode } = useColorMode();
  let navbarIcon = useColorModeValue("white", "gray.200");
  let menuBg = useColorModeValue("white", "navy.800");
  const notificationColor = useColorModeValue("gray.700", "white");

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <Flex
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      justifyContent={"space-between"}
      h={"75px"}
      py={4}
      borderRadius={8}
      px={4}
    >
      <InputGroup
        bg={"white"}
        borderRadius={8}
        w={{ sm: "250px", lg: "400px" }}
      >
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
              icon={<SearchIcon color={"silver"} w="15px" h="20px" />}
            ></IconButton>
          }
        />
        <Input
          fontSize="1xl"
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>

      <Flex
        pe={{ sm: "0px", md: "16px" }}
        w={{ sm: "100%", md: "auto" }}
        alignItems="center"
        flexDirection="row"
      >
        <Menu>
          <MenuButton>
            <BellIcon color={navbarIcon} w="18px" h="18px" />
          </MenuButton>
          <MenuList p="16px 8px" bg={menuBg}>
            <Flex flexDirection="column">
              <MenuItem borderRadius="8px" mb="10px">
                <Avatar
                  name="Alicia"
                  src={"avatar1"}
                  borderRadius="12px"
                  me="16px"
                />
                <Flex flexDirection="column">
                  <Text fontSize="14px" mb="5px" color={notificationColor}>
                    <Text fontWeight="bold" fontSize="14px" as="span">
                      New Message
                    </Text>
                    from Alicia
                  </Text>
                  <Flex alignItems="center">
                    <RepeatClockIcon
                      color={"silver"}
                      w="13px"
                      h="13px"
                      me="3px"
                    />
                    <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
                      13 minutes ago
                    </Text>
                  </Flex>
                </Flex>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
        <NavLink to="/auth/signin">
          <FiUser color={"silver"} w="22px" h="22px" ml="12px" />
        </NavLink>
        <NavLink to="/auth/signin">
          <FiUser color={"silver"} w="22px" h="22px" ml="12px" />
        </NavLink>
        <NavLink to="/auth/signin">
          <FiUser color={"silver"} w="22px" h="22px" ml="12px" />
        </NavLink>
      </Flex>
    </Flex>

    // <Flex
    //   // position={navbarPosition}
    //   // boxShadow={navbarShadow}
    //   // bg={navbarBg}
    //   // borderColor={navbarBorder}
    //   // filter={navbarFilter}
    //   // backdropFilter={navbarBackdrop}
    //   // borderWidth="1.5px"
    //   // borderStyle="solid"
    //   // transitionDelay="0s, 0s, 0s, 0s"
    //   // transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
    //   // transition-property="box-shadow, background-color, filter, border"
    //   // transitionTimingFunction="linear, linear, linear, linear"
    //   // alignItems={{ xl: "center" }}
    //   // borderRadius="16px"
    //   // display="flex"
    //   // minH="75px"
    //   // justifyContent={{ xl: "center" }}
    //   // lineHeight="25.6px"
    //   // mx="auto"
    //   // mt={secondaryMargin}
    //   // pb="8px"
    //   // left={""}
    //   // right={"30px"}
    //   // pt="8px"
    //   // top="18px"
    //   // w={{ sm: "calc(100vw - 60px)", xl: "calc(100vw - 60px - 340px)" }}

    //   w={"100%"}
    // >
    //   <Flex
    //     w="100%"
    //     flexDirection={{
    //       sm: "column",
    //       md: "row",
    //     }}
    //     alignItems={{ xl: "center" }}
    //   >
    //     <Box mb={{ sm: "8px", md: "0px" }}>
    //       <Breadcrumb>
    //         <BreadcrumbItem color="#A0AEC0">
    //           <BreadcrumbLink href="#" color="#A0AEC0">
    //             Pages
    //           </BreadcrumbLink>
    //         </BreadcrumbItem>

    //         <BreadcrumbItem color={mainText}>
    //           <BreadcrumbLink href="#" color={mainText}>
    //             {brandText}
    //           </BreadcrumbLink>
    //         </BreadcrumbItem>
    //       </Breadcrumb>
    //       <Link
    //         color={mainText}
    //         href="#"
    //         bg="inherit"
    //         borderRadius="inherit"
    //         fontWeight="bold"
    //         _hover={{ color: { mainText } }}
    //         _active={{
    //           bg: "inherit",
    //           transform: "none",
    //           borderColor: "transparent",
    //         }}
    //         _focus={{
    //           boxShadow: "none",
    //         }}
    //       >
    //         {brandText}
    //       </Link>
    //     </Box>

    //     <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
    //       {/* <AdminNavbarLinks
    //         onOpen={props.onOpen}
    //         logoText={props.logoText}
    //         secondary={props.secondary}
    //         fixed={props.fixed}
    //       /> */}
    //     </Box>
    //   </Flex>
    // </Flex>
  );
};

export default Header;
