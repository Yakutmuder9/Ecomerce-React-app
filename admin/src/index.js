import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, persistor } from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <LayoutGroup>
            <AnimatePresence>
              <App />
            </AnimatePresence>
          </LayoutGroup>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
