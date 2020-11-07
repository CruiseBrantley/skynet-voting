import React, { useState, useEffect } from "react";
import { PieChart, Pie, CartesianGrid, Bar, YAxis, XAxis, BarChart, Tooltip } from "recharts"

const options = data => {
  return data.map(game => {
      return { name: game.title, value: game.hasVoted ? game.hasVoted.length : 0 }
    })
}

export default function Results({ data, currentServer }) {

  const [currentWidth, setCurrentWidth] = useState(600)
  const [currentHeight, setCurrentHeight] = useState(600)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    function handleResize () {
      setCurrentWidth(window.innerWidth * .7)
      setCurrentHeight(window.innerHeight * .8)
    }
    setCurrentWidth(window.innerWidth * .7)
    setCurrentHeight(window.innerHeight * .8)
  }, [])

  return (
    <div className="right-pane">
      {/* {data
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
        : "Select a server"} */}
        { data ?
          <>
            {/* <PieChart width={400} height={400}>
              <Pie dataKey="value" startAngle={0} endAngle={360} data={options(data)} cx={200} cy={200} outerRadius={80} fill="#8884d8" label={i => `${i.value}: ${i.name.split(/[\s,:]+/)[0]}`} />
            </PieChart> */}
            <BarChart 
              width={currentWidth}
              height={currentHeight}
              data={options(data)}
              layout="vertical"
              margin={{top: 5, right: 20, left: 20, bottom: 5}}
            >
              <XAxis type="number" />
              <YAxis type="category"
                dx={-10}
                width={150}
                dataKey="name"
              />
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </>
        : null }
    </div>
  );
}
