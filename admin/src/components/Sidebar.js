import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Icon,
  Link,
  AccordionItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  ListIcon,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import sideNavitems from "../routes/routes";

const Sidebar = ({
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  sidebarWidth,
}) => {
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";

  const mainPanel = React.useRef();
  const location = useLocation();
  const path = location.pathname;

  let variantChange = "0.2s linear";
  let sidebarBg = useColorModeValue("white", "navy.800");
  const activeBg = useColorModeValue(greenGradient, "blue.700");

  const borderRadius = isHovered ? "0px 20px 20px 0px" : "0px";

  function checkPath(listPath) {
    const segments = path.split("/").filter((segment) => segment !== "");
    const firstTwoSegments = segments.slice(0, 2).join("/");
    return `/${firstTwoSegments}` === listPath ? true : false;
  }

  return (
    <Box
      ref={mainPanel}
      h="100%"
      minH={"100vh"}
      zIndex={14}
      position={"fixed"}
      overflowY={"scroll"}
      css={{
        "&::-webkit-scrollbar": {
          background: "transparent",
        },
      }}
      top={0}
      filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.2))"
    >
      <Box display={{ sm: "none", lg: "block" }}>
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w={sidebarWidth}
          h="100%"
          p={"5px"}
          minHeight={"100vh"}
          borderRadius={borderRadius}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
            <Flex
              h="1px"
              w="100%"
              bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
              my="20px"
            ></Flex>
          </Box>

          <Accordion allowToggle>
            {sideNavitems.map((item, i) => {
              return (
                <AccordionItem m={1} border={0} key={i}>
                  {item.name == "Sales" && (
                    <Box fontWeight={"bolder"}>
                      {isHovered ? (
                        <>
                          <Flex
                            h="1px"
                            w="100%"
                            bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
                            my="20px"
                          ></Flex>
                          <Text pl={12}>Account Activity</Text>
                          <Flex
                            h="1px"
                            w="100%"
                            bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
                            my="20px"
                          ></Flex>
                        </>
                      ) : (
                        <>
                          <Flex
                            h="1px"
                            w="100%"
                            bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
                            my="20px"
                          ></Flex>
                        </>
                      )}
                    </Box>
                  )}

                  <Box
                    px={0}
                    _hover={{ boxShadow: "0px 7px 11px #0000001a" }}
                    borderRadius={8}
                    boxShadow={
                      path == item.layout ? "0px 7px 11px #0000001a" : ""
                    }
                  >
                    <Flex w={"100%"} fontSize="4xl">
                      <AccordionButton w="100%" _hover={{ background: "none" }}>
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
                  </Box>

                  {item.views && isHovered && (
                    <AccordionPanel pb={2}>
                      <List spacing={2}>
                        {item.views?.map((list, i) => {
                          return (
                            <NavLink to={item.layout + list.path} key={i}>
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
                // _hover={"red"}
                border={"1px solid green"}
              >
                {isHovered ? (
                  <Flex w={205} alignItems={"Center"} justifyContent={"center"}>
                    <FiLogOut fontSize={"xl"} fontWeight={"bolder"} /> Log Out
                  </Flex>
                ) : (
                  <FiLogOut fontSize={"xl"} />
                )}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
