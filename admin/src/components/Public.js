import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  Text,
  chakra,
  HStack,
  Image,
  Skeleton,
  Icon,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import DashFooter from "./Footer/HomeFooter";
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";
import { motion } from "framer-motion";

const Public = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <Box minH={"100vh"}>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Container maxW={"6xl"}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <Text fontWeight={800} fontSize={24}>
                Zilla
              </Text>

              <Flex alignItems={"center"}>
                <Stack direction={"row"} spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? (
                      <BsFillMoonStarsFill />
                    ) : (
                      <BsFillSunFill />
                    )}
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar
                        size={"sm"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar
                          size={"2xl"}
                          src={
                            "https://avatars.dicebear.com/api/male/username.svg"
                          }
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Username</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>Your Servers</MenuItem>
                      <MenuItem>Account Settings</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Box>
          <Container maxW="6xl" py={24}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent="center"
            >
              <Stack
                direction="column"
                spacing={6}
                justifyContent="center"
                //   maxW="480px"
              >
                <HStack
                  as={Link}
                  p={1}
                  rounded="full"
                  fontSize="sm"
                  w="max-content"
                  bg={useColorModeValue("gray.300", "gray.700")}
                >
                  <Box
                    py={1}
                    px={2}
                    lineHeight={1}
                    rounded="full"
                    color="white"
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                  >
                    What's new
                  </Box>
                  <HStack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text lineHeight={1}>See our recent updates</Text>
                    <Icon as={GoChevronRight} w={4} h={4} />
                  </HStack>
                </HStack>
                <chakra.h1
                  fontSize="5xl"
                  lineHeight={1}
                  fontWeight="bold"
                  textAlign="left"
                >
                  Build products faster <br />
                  <chakra.span color="teal">in Zillo Dashboard</chakra.span>
                </chakra.h1>
                <Text
                  fontSize="1.2rem"
                  textAlign="left"
                  lineHeight="1.375"
                  fontWeight="400"
                  color="gray.500"
                >
                  Powerful tools at your fingertips, empowering you to
                  effortlessly manage your eCommerce empire and drive success
                  with our intuitive admin dashboard.
                </Text>
                <HStack
                  spacing={{ base: 0, sm: 2 }}
                  mb={{ base: "3rem !important", sm: 0 }}
                  flexWrap="wrap"
                >
                  <chakra.button
                    w={{ base: "100%", sm: "auto" }}
                    h={12}
                    px={6}
                    color="white"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    zIndex={5}
                    lineHeight={1}
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    _hover={{
                      bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
                      opacity: 0.9,
                    }}
                  >
                    <chakra.span> Explore Product </chakra.span>
                    <Icon as={MdBolt} h={4} w={4} ml={1} />
                  </chakra.button>
                  <Box
                    d="flex"
                    justifyContent="center"
                    bg={useColorModeValue("white", "gray.800")}
                    w={{ base: "100%", sm: "auto" }}
                    border="1px solid"
                    borderColor="gray.300"
                    p={3}
                    lineHeight={1.18}
                    rounded="md"
                    boxShadow="md"
                    as={Link}
                    zIndex={55555555}
                  >
                    Watch Video
                  </Box>
                </HStack>
              </Stack>
              <Box ml={{ base: 0, md: 5 }} pos="relative">
                {/* <DottedBox /> */}
                <Image
                  w="100%"
                  h="100%"
                  minW={{ base: "auto", md: "30rem" }}
                  objectFit="cover"
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
                  rounded="md"
                  fallback={<Skeleton />}
                />
              </Box>
            </Stack>
          </Container>
        </Box>

        <DashFooter />
      </Box>
    </motion.div>
  );
};
export default Public;
