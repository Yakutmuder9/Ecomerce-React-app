import Footer from "../footer/Footer.js";
import { Outlet, Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.js";
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { ArgonLogoDark, ArgonLogoLight } from "../Icons/Icons";
import MainPanel from "./MainPanel";
import routes from "../../routes/routes.js";
import { useState } from "react";
import AdminHeader from "../header/AdminHeader.js";
import PanelContent from "./PanelContent";
import PanelContainer from "./PanelContainer";
import FixedPlugin from "../FixedPlugin/FixedPlugin";
import Configurator from "../Configurator/Configurator.js";

const Layout = (props) => {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Box>
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

      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 315px)",
        }}
      >
        <Portal>
          <AdminHeader
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        </Portal>

        <PanelContent>
          <PanelContainer>
            <Outlet />
          </PanelContainer>
        </PanelContent>

        <Footer />

        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          secondary={getActiveNavbar(routes)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
        />
      </MainPanel>
    </Box>
  );
};

export default Layout;
