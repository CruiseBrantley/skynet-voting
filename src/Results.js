import React from "react";

export default function Results({ data, currentServer }) {
  return (
    <div className="right-pane">
      <h1>Results</h1>
      {data
        ? data.map(game => {
            return (
              <div className="results-container">
                <div className="left-result">{game.title}</div>
                <div className="right-result">
                  {`${
                    game.hasVoted && game.hasVoted.length
                      ? game.hasVoted.length
                      : 0
                  } votes`}
                </div>
              </div>
            );
          })
        : "Select a server"}
    </div>
  );
}
