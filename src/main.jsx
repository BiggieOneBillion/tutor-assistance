import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </Theme>
  </React.StrictMode>
);
