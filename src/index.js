import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import config from "./config";
import "./App.css";

ReactDOM.render(
  <FirebaseDatabaseProvider firebase={firebase} {...config}>
    <App />
  </FirebaseDatabaseProvider>,
  document.getElementById("root")
);
