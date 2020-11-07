import React, { useState, useEffect } from "react";
import Server from "./ServerList";
import Results from "./Results";

export default function Container({ data }) {
  const [servers, setServers] = useState([]);
  const [currentServer, setCurrentServer] = useState();

  useEffect(() => mapServers(data), [data]);

  const mapServers = data => {
    const tempServers = [];
    for (let server in data) {
      tempServers.push(server);
    }
    setServers(tempServers);
  };

  return (
    <div className="container">
      <div className="left-pane">
        {servers.map(server => (
          <Server
            key={server}
            server={server}
            onClick={() =>
              currentServer === server
                ? setCurrentServer(undefined)
                : setCurrentServer(server)
            }
            isHighlighted={server === currentServer}
          />
        ))}
      </div>
      <Results
        data={data && data[currentServer]}
        currentServer={currentServer}
      />
    </div>
  );
}
