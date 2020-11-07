import React from "react";

export default function ServerList(props) {
  return (
    <div
      className={props.isHighlighted ? "server highlighted" : "server"}
      onClick={props.onClick}
    >
      <h3>{props.server}</h3>
    </div>
  );
}
