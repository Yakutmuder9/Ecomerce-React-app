import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";
import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
export default function NavItem({
  icon,
  title,
  description,
  active,
  isHovered,
  to,
}) {
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";
  const { colorMode } = useColorMode();

  const navItemBg = useColorModeValue("gray.200", "gray.700");
  const activeBg = useColorModeValue(greenGradient, "blue.700");
  const activeTxt = useColorModeValue("balck", "white");
  return (
    <Flex
      flexDir="column"
      w="100%"
      // pe={"12px"}
      alignItems={isHovered ? "flex-start" : "center"}
    >
      <Menu placement="right">
        <Link
          as={RouterLink}
          _hover={{
            textDecor: "none",
            boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.1)",
            filter: "drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.2))",
            color: "#000",
          }}
          _activeLink={{ fontWeight: "bold" }}
          // mb={2}
          boxShadow={active && "0px 7px 11px rgba(0, 0, 0, 0.1)"}
          w={isHovered && "100%"}
          borderRadius={8}
          // p={2}
          to={to}
        >
          <MenuButton w="100%">
            <Flex
              alignItems={"center"}
              _hover={{
                color: "#fff",
              }}
            >
              <Icon
                as={icon}
                fontSize="4xl"
                borderRadius={8}
                color={(active && "white") || colorMode}
                bg={active && activeBg}
                p={2}
              />
              <Text
                ml={5}
                display={isHovered ? "flex" : "none"}
                fontWeight={active ? "bold" : "normal"}
                color={active && activeTxt}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>

        {/* <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList> */}
      </Menu>
    </Flex>
  );
}
