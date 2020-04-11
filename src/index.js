import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DeveloperProvider } from "../src/context/developersContext";
import { CustomerProvider } from "../src/context/customersContext";
import { CompanyProvider } from "../src/context/companyContext";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <CompanyProvider>
    <CustomerProvider>
      <DeveloperProvider>
        <App />
      </DeveloperProvider>
    </CustomerProvider>
  </CompanyProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
