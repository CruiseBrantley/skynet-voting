import React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import Container from "./Container";

export default function App() {
  return (
    <FirebaseDatabaseNode path="/">
      {data => <Container data={data.value} />}
    </FirebaseDatabaseNode>
  );
}
