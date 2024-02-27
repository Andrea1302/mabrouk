import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Style
import "./index.scss";

//Routing
import Routing from "./Routing";

// localization
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Routing />
    </I18nextProvider>
  </BrowserRouter>
);
