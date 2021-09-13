import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById("root")
);
