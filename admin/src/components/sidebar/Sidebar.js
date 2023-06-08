import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  Link,
  IconButton,
  AccordionItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  ListIcon,
  List,
  ListItem,
  background,
  Spacer,
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
  renderView,
} from "../Scrollbar/Scrollbar";
import { HSeparator, VSeparator } from "../Separator/Separator";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { HomeIcon } from "../Icons/Icons";
import NavItem from "./NavItem";

import {
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import sideNavitems from "../../routes/routes";

const Sidebar = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";

  const mainPanel = React.useRef();
  const location = useLocation();
  const path = location.pathname;

  // console.log(location.pathname);
  let variantChange = "0.2s linear";
  let sidebarBg = useColorModeValue("white", "navy.800");
  const navItemBg = useColorModeValue("gray.200", "gray.700");
  const activeBg = useColorModeValue(greenGradient, "blue.700");
  const activeTxt = useColorModeValue("balck", "white");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sidebarWidth = isHovered ? "275px" : "75px";
  const borderRadius = isHovered ? "0px 20px 20px 0px" : "0px";

  function checkPath(listPath) {
    const segments = path.split("/").filter((segment) => segment !== "");
    const firstTwoSegments = segments.slice(0, 2).join("/");
    return `/${firstTwoSegments}` === listPath ? true : false;
  }

  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w={sidebarWidth}
          h="100vh"
          p={"5px"}
          filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.2))"
          borderRadius={borderRadius}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Scrollbars
            autoHide
            renderTrackVertical={renderTrack}
            renderThumbVertical={useColorModeValue(
              renderThumbLight,
              renderThumbDark
            )}
            renderView={renderView}
          >
            <Box
              pt={"25px"}
              ps={"10px"}
              mb="12px"
              fontWeight={"extrabold"}
              color={"#03322E"}
              fontSize={"21px"}
              whiteSpace={"nowrap"}
            >
              {isHovered ? "Zillo Shopping" : "Zillo"}
              <HSeparator my="20px" />
            </Box>

            <Accordion allowToggle>
              {sideNavitems.map((item, key) => {
                return (
                  <AccordionItem m={1} border={0}>
                    {item.name == "Sales" && (
                      <Box fontWeight={"bolder"}>
                        {isHovered ? (
                          <>
                            <HSeparator my="20px" />
                            <Text pl={12}>Account Activity</Text>
                            <HSeparator my="20px" />
                          </>
                        ) : (
                          <>
                            <HSeparator my="20px" />
                            <Text textAlign={"center"}>Acc </Text>
                            <HSeparator my="20px" />
                          </>
                        )}
                      </Box>
                    )}
                    <AccordionButton
                      px={0}
                      _hover={{ boxShadow: "0px 7px 11px #0000001a" }}
                      borderRadius={8}
                      boxShadow={
                        path == item.layout ? "0px 7px 11px #0000001a" : ""
                      }
                    >
                      <Flex w={"100%"} fontSize="4xl">
                        <AccordionButton
                          w={"100%"}
                          _hover={{ background: "none" }}
                        >
                          {item.name == "Dashboard" ? (
                            <NavLink to={"/admin/dashboard"}>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                display={"flex"}
                                alignItems={"center"}
                              >
                                {item.icon && (
                                  <Icon
                                    as={item.icon}
                                    fontSize={"4xl"}
                                    me={2}
                                    bg={checkPath(item.layout) && activeBg}
                                    color={checkPath(item.layout) && "white"}
                                    p={2}
                                    boxShadow={"0px 7px 11px #0000001a"}
                                    borderRadius={8}
                                  />
                                )}{" "}
                                <Text
                                  fontSize={"18px"}
                                  fontWeight={checkPath(item.layout) && "bold"}
                                  whiteSpace={"nowrap"}
                                >
                                  {isHovered && item.name}
                                </Text>
                              </Box>
                            </NavLink>
                          ) : (
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              display={"flex"}
                              alignItems={"center"}
                            >
                              {item.icon && (
                                <Icon
                                  as={item.icon}
                                  fontSize={"4xl"}
                                  me={2}
                                  bg={checkPath(item.layout) && activeBg}
                                  color={checkPath(item.layout) && "white"}
                                  p={2}
                                  boxShadow={"0px 7px 11px #0000001a"}
                                  borderRadius={8}
                                />
                              )}{" "}
                              <Text
                                fontSize={"18px"}
                                fontWeight={checkPath(item.layout) && "bold"}
                                whiteSpace={"nowrap"}
                              >
                                {isHovered && item.name}
                              </Text>
                            </Box>
                          )}

                          {isHovered && item.views ? <AccordionIcon /> : null}
                        </AccordionButton>
                      </Flex>
                    </AccordionButton>

                    {item.views && isHovered && (
                      <AccordionPanel pb={2}>
                        <List spacing={2}>
                          {item.views?.map((list, key) => {
                            return (
                              <NavLink to={item.layout + list.path}>
                                <ListItem
                                  py={3}
                                  px={2}
                                  borderRadius={8}
                                  _hover={{
                                    boxShadow: "0px 7px 11px #01311d18",
                                  }}
                                  fontSize={"1xl"}
                                  boxShadow={
                                    path == item.layout + list.path
                                      ? "0px 7px 11px #01311d18"
                                      : ""
                                  }
                                >
                                  <ListIcon
                                    as={MdCheckCircle}
                                    color={
                                      path == item.layout + list.path
                                        ? "green.500"
                                        : ""
                                    }
                                  />
                                  {isHovered && list.name}
                                </ListItem>
                              </NavLink>
                            );
                          })}
                        </List>
                      </AccordionPanel>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>

            <Box
              // position={"absolute"}
              justify="center"
              direction="column"
              align="center"
              spacing="20px"
              mb="22px"
              mt="20px"
              mx="10px"
              bottom={1}
            >
              <Link href="/login" minW="100%">
                <Button
                  bg={"rgba(255, 255, 255, 0.16)"}
                  backdropFilter={"blur(28.6667px)"}
                  boxShadow={"0px 14.3333px 28.6667px rgba(27, 27, 27, 0.16)"}
                  color={"black"}
                  _hover={"red"}
                  border={"1px solid green"}
                >
                  {isHovered ? (
                    <Flex
                      w={205}
                      alignItems={"Center"}
                      justifyContent={"center"}
                    >
                      <FiLogOut fontSize={"xl"} fontWeight={"bolder"} /> Log Out
                    </Flex>
                  ) : (
                    <FiLogOut fontSize={"xl"} />
                  )}
                </Button>
              </Link>
            </Box>
          </Scrollbars>
        </Box>
      </Box>
    </Box>
  );
};

export const SidebarResponsive = (props) => {
  let location = useLocation();
  const { logo, routes, colorMode, hamburgerColor, ...rest } = props;

  // const [state, setState] = React.useState({});
  // const mainPanel = React.useRef();
  // let greenGradient =
  //   "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";

  // const activeRoute = (routeName) => {
  //   return location.pathname === routeName ? "active" : "";
  // };

  // // Chakra Color Mode
  // let activeBg = useColorModeValue("white", "navy.700");
  // let inactiveBg = useColorModeValue("white", "navy.700");
  // let activeColor = useColorModeValue("gray.700", "white");
  // let inactiveColor = useColorModeValue("gray.400", "white");
  // let sidebarActiveShadow = useColorModeValue(
  //   "0px 7px 11px rgba(0, 0, 0, 0.04)",
  //   "none"
  // );
  // let sidebarBackgroundColor = useColorModeValue("white", "navy.800");

  // const createLinks = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.redirect) {
  //       return null;
  //     }
  //     if (prop.category) {
  //       var st = {};
  //       st[prop["state"]] = !state[prop.state];
  //       return (
  //         <>
  //           <Text
  //             color={activeColor}
  //             fontWeight="bold"
  //             mb={{
  //               xl: "6px",
  //             }}
  //             mx="auto"
  //             ps={{
  //               sm: "10px",
  //               xl: "16px",
  //             }}
  //             py="12px"
  //           >
  //             {document.documentElement.dir === "rtl"
  //               ? prop.rtlName
  //               : prop.name}
  //           </Text>
  //           {createLinks(prop.views)}
  //         </>
  //       );
  //     }
  //     return (
  //       <NavLink to={prop.layout + prop.path} key={key}>
  //         {activeRoute(prop.layout + prop.path) === "active" ? (
  //           <Button
  //             boxSize="initial"
  //             justifyContent="flex-start"
  //             alignItems="center"
  //             bg={activeBg}
  //             boxShadow={sidebarActiveShadow}
  //             mb={{
  //               xl: "6px",
  //             }}
  //             mx={{
  //               xl: "auto",
  //             }}
  //             ps={{
  //               sm: "10px",
  //               xl: "16px",
  //             }}
  //             py="12px"
  //             borderRadius="15px"
  //             _hover="none"
  //             w="100%"
  //             _active={{
  //               bg: "inherit",
  //               transform: "none",
  //               borderColor: "transparent",
  //             }}
  //             _focus={{
  //               boxShadow: "none",
  //             }}
  //           >
  //             <Flex>
  //               {typeof prop.icon === "string" ? (
  //                 <Icon>{prop.icon}</Icon>
  //               ) : (
  //                 <IconBox
  //                   bg="blue.500"
  //                   color="white"
  //                   h="30px"
  //                   w="30px"
  //                   me="12px"
  //                 >
  //                   {prop.icon}
  //                 </IconBox>
  //               )}
  //               <Text color={activeColor} my="auto" fontSize="sm">
  //                 {prop.name}
  //               </Text>
  //             </Flex>
  //           </Button>
  //         ) : (
  //           <Button
  //             boxSize="initial"
  //             justifyContent="flex-start"
  //             alignItems="center"
  //             bg="transparent"
  //             mb={{
  //               xl: "6px",
  //             }}
  //             mx={{
  //               xl: "auto",
  //             }}
  //             py="12px"
  //             ps={{
  //               sm: "10px",
  //               xl: "16px",
  //             }}
  //             borderRadius="15px"
  //             _hover="none"
  //             w="100%"
  //             _active={{
  //               bg: "inherit",
  //               transform: "none",
  //               borderColor: "transparent",
  //             }}
  //             _focus={{
  //               boxShadow: "none",
  //             }}
  //           >
  //             <Flex>
  //               {typeof prop.icon === "string" ? (
  //                 <Icon>{prop.icon}</Icon>
  //               ) : (
  //                 <IconBox
  //                   bg={inactiveBg}
  //                   color="blue.500"
  //                   h="30px"
  //                   w="30px"
  //                   me="12px"
  //                 >
  //                   {prop.icon}
  //                 </IconBox>
  //               )}
  //               <Text color={inactiveColor} my="auto" fontSize="sm">
  //                 {prop.name}
  //               </Text>
  //             </Flex>
  //           </Button>
  //         )}
  //       </NavLink>
  //     );
  //   });
  // };

  // var links = <>{createLinks(routes)}</>;

  // var brand = (
  //   <Box pt={"35px"} mb="8px">
  //     {logo}
  //     <HSeparator my="26px" />
  //   </Box>
  // );
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  return (
    <Flex
      display={{ sm: "flex", xl: "none" }}
      // ref={mainPanel}
      alignItems="center"
    >
      {/* <HamburgerIcon
        color={hamburgerColor}
        w="18px"
        h="18px"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={"left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{links}</Box>
              </Stack>
              <Stack
                justify="center"
                direction="column"
                align="center"
                spacing="20px"
                mb="22px"
                mt="auto"
                mx="20px"
              >
                <Link href="#" minW="100%">
                  <Button
                    variant={colorMode === "light" ? "dark" : "navy"}
                    minW="100%"
                    mb={window.innerWidth <= 1024 && "12px"}
                  >
                    Log Out
                  </Button>
                </Link>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </Flex>
  );
};
export default Sidebar;
