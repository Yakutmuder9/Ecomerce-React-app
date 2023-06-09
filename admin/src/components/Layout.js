import Footer from "./footer/Footer.js";
import { Outlet, Route } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { ArgonLogoDark, ArgonLogoLight } from "./Icons/Icons.js";
import routes from "../routes/routes.js";
import { useState } from "react";
import Header from "./Header.js";
import FixedPlugin from "./FixedPlugin/FixedPlugin.js";
import Configurator from "./Configurator/Configurator.js";

const Layout = (props) => {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        // maxWidth={1600}
        width={"100%"}
        overflow={"auto"}
        position={"relative"}
        display={"flex"}
        maxHeight={"100%"}
        transition={"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"}
        transitionDuration={".2s, .2s, .35s"}
        transitionProperty={"top, bottom, width"}
        transitionTimingFunction={"linear, linear, ease"}
      >
        <Box
          minH="40vh"
          w="100%"
          position="absolute"
          bg={
            colorMode === "light"
              ? "linear-gradient(176.64deg, #03312E 1.63%, rgba(6, 64, 57, 0.96) 46.9%, rgba(10, 84, 71, 0.79) 6.11%)"
              : "navy.900"
          }
          bgSize="cover"
          top="0"
          zIndex={1}
        />

        <Sidebar
          routes={routes}
          logo={
            <Stack direction="row" ml="12px">
              {colorMode === "dark" ? (
                <ArgonLogoLight w="74px" h="27px" />
              ) : (
                <ArgonLogoDark w="74px" h="27px" />
              )}
            </Stack>
          }
          display="none"
          {...rest}
        />
        <Box
          p={{ sm: "15px", lg: "20px 0px" }}
          minHeight={"100vh"}
          zIndex={2}
          w={"100%"}
          mx={{ lg: 25 }}
          float={{ lg: "right" }}
        >
          <Header onOpen={onOpen} fixed={fixed} {...rest} />
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
