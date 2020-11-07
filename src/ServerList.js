import React from "react";
import serverLookup from "./serverLookup"

export default function ServerList(props) {
  return (
    <div
      className={props.isHighlighted ? "server highlighted" : "server"}
      onClick={props.onClick}
    >
      <h3>{serverLookup(props.server)}</h3>
    </div>
  );
}
