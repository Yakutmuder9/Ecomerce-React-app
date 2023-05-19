import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LayoutGroup, AnimatePresence } from "framer-motion";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LayoutGroup>
          <AnimatePresence>
            <App />
          </AnimatePresence>
        </LayoutGroup>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
