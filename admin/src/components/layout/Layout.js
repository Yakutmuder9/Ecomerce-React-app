import Footer from "../footer/Footer.js";
import Header from "../header/AdminHeader.js";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.js";
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
} from "../Icons/Icons";
import MainPanel from "./MainPanel";
import routes from "../../routes.js";
import { useState } from "react";
import bgAdmin from "../../assets/img/admin-background.png";

const Layout = (props) => {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        minH="40vh"
        w="100%"
        position="absolute"
        bgImage={colorMode === "light" ? bgAdmin : "none"}
        bg={colorMode === "light" ? bgAdmin : "navy.900"}
        bgSize="cover"
        top="0"
      />
      <Sidebar
        routes={routes}
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
        display="none"
        {...rest}
      />

      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        {/* <Header />
        <div style={{ minHeight: "80vh" }} className="--pad">
          <Outlet />
        </div>
        <Footer /> */}
      </MainPanel>
    </Box>
  );
};

export default Layout;
