import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider resetCss={false} position="relative">
          <LayoutGroup>
            <AnimatePresence>
              <App />
            </AnimatePresence>
          </LayoutGroup>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
