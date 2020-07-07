import React from "react";
import ReactDOM from "react-dom";
import "./share/bootstrap";
import App from "./App";

const root = document.getElementById("app-root");

if (root) {
    ReactDOM.render(<App />, root);
}
