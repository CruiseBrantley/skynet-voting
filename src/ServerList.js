import React from "react";
import serverLookup from "./serverLookup"

export default function ServerList(props) {
  return (
    <div
      className={props.isHighlighted ? "server highlighted" : "server"}
      onClick={props.onClick}
    >
      <div className='server-spacing'>
        <span>{serverLookup(props.server)}</span>
      </div>
    </div>
  );
}
