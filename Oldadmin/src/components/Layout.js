import Footer from "./footer/Footer.js";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import { useDisclosure, Box, useColorMode } from "@chakra-ui/react";
import routes from "../routes/routes.js";
import { useState } from "react";
import Header from "./Header.js";

const Layout = (props) => {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sidebarWidth = isHovered ? "275px" : "75px";

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
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
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          sidebarWidth={sidebarWidth}
          isHovered={isHovered}
          display="none"
          {...rest}
        />
        <Box
          p={{ sm: "15px", lg: "20px 0px" }}
          pl={{ lg: sidebarWidth }}
          minHeight={"100vh"}
          zIndex={2}
          w={"100%"}
          mx={{ lg: 25 }}
          transitionDelay="0s, 0s, 0s, 0s"
          transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
          transition-property="box-shadow, background-color, filter, border"
          transitionTimingFunction="linear, linear, linear, linear"
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
