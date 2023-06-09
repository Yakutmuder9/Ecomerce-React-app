import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import avatar1 from "../../assets/img/avatars/avatar1.png";
import avatar2 from "../../assets/img/avatars/avatar2.png";
import avatar3 from "../../assets/img/avatars/avatar3.png";
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
  ProfileIcon,
  SettingsIcon,
} from "../Icons/Icons";
import { ItemContent } from "./ItemContent";
import { SearchBar } from "./SearchBar";
import { SidebarResponsive } from "../sidebar/Sidebar";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export default function HeaderLinks(props) {
  const { variant, children, fixed, scrolled, secondary, onOpen, ...rest } =
    props;
  const { colorMode } = useColorMode();
  let navbarIcon = useColorModeValue("white", "gray.200");
  let menuBg = useColorModeValue("white", "navy.800");
  const notificationColor = useColorModeValue("gray.700", "white");

  if (secondary) {
    navbarIcon = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <SearchBar me="18px" />
      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="no-effects"
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            ) : (
              ""
            )
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        hamburgerColor={"white"}
        logo={
          <Stack direction="row" spacing="12px" align="center" justify="center">
            {colorMode === "dark" ? (
              <ArgonLogoLight w="74px" h="27px" />
            ) : (
              <ArgonLogoDark w="74px" h="27px" />
            )}
            <Box
              w="1px"
              h="20px"
              bg={colorMode === "dark" ? "white" : "gray.700"}
            />
            {colorMode === "dark" ? (
              <ChakraLogoLight w="82px" h="21px" />
            ) : (
              <ChakraLogoDark w="82px" h="21px" />
            )}
          </Stack>
        }
        colorMode={colorMode}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px" bg={menuBg}>
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <Avatar
                name="Alicia"
                src={avatar1}
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
                  <ClockIcon color={navbarIcon} w="13px" h="13px" me="3px" />
                  <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
                    13 minutes ago
                  </Text>
                </Flex>
              </Flex>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
