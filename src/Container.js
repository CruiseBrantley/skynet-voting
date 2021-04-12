import React, { useState, useEffect } from "react";
import Server from "./ServerList";
import Results from "./Results";
import { useLocation } from "react-router";

export default function Container({ data }) {
  const [servers, setServers] = useState([]);
  const [currentServer, setCurrentServer] = useState();
  const [location] = useState(useLocation().pathname.substring(1));

  useEffect(() => mapServers(data), [data]);

  const mapServers = data => {
    const tempServers = [];
    for (let server in data) {
      tempServers.push(server);
    }
    setServers(tempServers);
  };

  const renderOneServer = () => {
    if (currentServer !== location) setCurrentServer(location)
    return <Server
      key={location}
      server={location}
      onClick={() => { }}
      isHighlighted={true}
    />
  }

  const renderServers = () => (
    servers.map(server => (
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
    ))
  )

  return (
    <div className="container">
      <div className="left-pane">
        {
          servers.find(server => server === location) ?
            renderOneServer() :
            renderServers()
        }
      </div>
      <Results
        data={data && data[currentServer]}
        currentServer={currentServer}
      />
    </div>
  );
}
