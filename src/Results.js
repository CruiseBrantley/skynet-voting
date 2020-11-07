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

    function setWidth () {
      if (window.innerWidth < 800) return setCurrentWidth(window.innerWidth)
      return setCurrentWidth(window.innerWidth * .7)
    }

    function handleResize () {
      setWidth()
      setCurrentHeight(window.innerHeight * .8)
    }
    
    setWidth()
    setCurrentHeight(window.innerHeight * .8)
  }, [])

  return (
    <div className="right-pane">
        { data ?
          <>
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
