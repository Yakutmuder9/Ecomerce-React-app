import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../components/card/Card.js";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import IconBox from "../../components/Icons/IconBox";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "../../components/Icons/Icons.js";
import React from "react";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "../../assets/data/charts";
import { pageVisits, socialTraffic } from "../../assets/data/general";

const Dashboard = () => {
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";
  const gridBg = useColorModeValue("white", "navy.600");
  const iconBlue = useColorModeValue(greenGradient, "navy.400");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("#03322E", "white");
  const tableRowColor = useColorModeValue(greenGradient, "navy.900");
  const borderColor = useColorModeValue(greenGradient, "gray.600");
  const textTableColor = useColorModeValue(greenGradient, "white");

  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Flex
        direction="column"
        mb="40px"
        p={{ sm: "40px 10px 15px 10px", lg: "40px 10px 15px 30px" }}
        bg={gridBg}
        borderRadius={"12px"}
        boxShadow={"0px 5px 14px rgba(0, 0, 0, 0.05)"}
      >
        <Box>
          <Text color={textColor} fontSize="xl" fontWeight="bold" pb={"5px"}>
            Order Activity
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
            Activities that you need to monitor to maintain your order
          </Text>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
          <Card minH="80px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                w="100%"
                mb="20px"
              >
                <Stat>
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    New Orders
                  </StatLabel>

                  <Flex>
                    <StatNumber
                      fontSize="xl"
                      color={textColor}
                      fontWeight="bold"
                      w={"auto"}
                    >
                      3450
                    </StatNumber>
                  </Flex>
                </Stat>
                <IconBox
                  borderRadius="50%"
                  // as="box"
                  h={"45px"}
                  w={"45px"}
                  bg={iconBlue}
                >
                  <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>

              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  +3.48%{" "}
                </Text>
                Since last month
              </Text>
            </Flex>
          </Card>
          <Card minH="80px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px"
              >
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Ready to ship
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      +2,503
                    </StatNumber>
                  </Flex>
                </Stat>
                <IconBox
                  borderRadius="50%"
                  // as="box"
                  h={"45px"}
                  w={"45px"}
                  bg={iconBlue}
                >
                  <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="red.500" fontWeight="bold">
                  -2.82%{" "}
                </Text>
                Since last month
              </Text>
            </Flex>
          </Card>
          <Card minH="80px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px"
              >
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Order shipped
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      173
                    </StatNumber>
                  </Flex>
                </Stat>
                <IconBox
                  borderRadius="50%"
                  // as="box"
                  h={"45px"}
                  w={"45px"}
                  bg={iconBlue}
                >
                  <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  +8.12%{" "}
                </Text>
                Since last month
              </Text>
            </Flex>
          </Card>
          <Card minH="80px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px"
              >
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Order Complaint
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      12
                    </StatNumber>
                  </Flex>
                </Stat>
                <IconBox
                  borderRadius="50%"
                  // as="box"
                  h={"45px"}
                  w={"45px"}
                  bg={iconBlue}
                >
                  <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  +8.12%{" "}
                </Text>
                Since last month
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
      </Flex>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card
          bg={colorMode === "dark" ? "navy.800" : greenGradient}
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
        >
          <Flex direction="column" p="28px 0px 0px 22px">
            <Text color="#fff" fontSize="lg" fontWeight="bold" mb="6px">
              Sales Overview
            </Text>
            <Text color="#fff" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                (+5) more{" "}
              </Text>
              in 2022
            </Text>
          </Flex>
          <Box minH="300px" p="10px 0px 15px 0px">
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>

        <Card
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
          bg={colorMode === "dark" ? "navy.800" : "white"}
        >
          <Flex direction="column" p="28px 0px 0px 22px">
            <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
              PERFORMANCE
            </Text>
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Total orders
            </Text>
          </Flex>
          <Box minH="300px" p="0px 10px 0px 10px">
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
          </Box>
        </Card>

        <Card
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
          bg={colorMode === "dark" ? "navy.800" : "white"}
        >
          <Flex direction="column" p={"10px"}>
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Page visits
              </Text>
              <Button variant="navy" maxH="30px">
                SEE ALL
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color="gray.400" borderColor={borderColor}>
                      Page name
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Visitors
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Unique users
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Bounce rate
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          fontWeight="bold"
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}
                        >
                          {el.pageName}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.visitors}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.uniqueUsers}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.bounceRate}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>

        <Card
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
          bg={colorMode === "dark" ? "navy.800" : "white"}
        >
          <Flex direction="column" p={"5px"}>
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Social traffic
              </Text>
              <Button variant="navy" maxH="30px">
                SEE ALL
              </Button>
            </Flex>
          </Flex>

          <Box overflow={{ sm: "scroll", lg: "hidden" }} m={"10px"}>
            <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color="gray.400" borderColor={borderColor}>
                    Referral
                  </Th>
                  <Th color="gray.400" borderColor={borderColor}>
                    Visitors
                  </Th>
                  <Th color="gray.400" borderColor={borderColor}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {socialTraffic.map((el, index, arr) => {
                  return (
                    <Tr key={index}>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        fontWeight="bold"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        {el.referral}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        {el.visitors}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        <Flex align="center">
                          <Text
                            color={textTableColor}
                            fontWeight="bold"
                            fontSize="sm"
                            me="12px"
                          >{`${el.percentage}%`}</Text>
                          <Progress
                            size="xs"
                            colorScheme={el.color}
                            value={el.percentage}
                            minW="120px"
                          />
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
