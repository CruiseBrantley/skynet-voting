import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import config from "./config";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

ReactDOM.render(
  <FirebaseDatabaseProvider firebase={firebase} {...config}>
    <Router>
      <App />
    </Router>
  </FirebaseDatabaseProvider>,
  document.getElementById("root")
);
