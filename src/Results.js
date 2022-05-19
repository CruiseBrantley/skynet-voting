import React, { useState, useEffect } from 'react'
import { VictoryBar } from 'victory'
import CustomLabel from './CustomLabel'

export default function Results ({ data, currentServer }) {
  const [highest, setHighest] = useState(0)

  useEffect(() => {
    setHighest(0)
  }, [data])

  const options = () => {
    return data
      .map(game => {
        if (game.hasVoted?.length > highest) setHighest(game.hasVoted.length)
        return { x: game.title, y: game.hasVoted ? game.hasVoted.length : 0 }
      })
      .reverse()
  }

  return (
    <div className='right-pane'>
      {data ? (
        <>
          <VictoryBar
            data={options(data)}
            barRatio={0.7}
            labels={({ datum }) => datum.x}
            horizontal
            animate={{
              duration: 500,
              onLoad: { duration: 500 },
              onchange: { duration: 500 }
            }}
            style={{
              data: {
                fill: ({ datum }) => (datum.y >= highest ? 'gold' : 'teal'),
                width: 10
              },
              labels: {
                fill: ({ datum }) => (datum.y >= highest ? 'crimson' : 'white'),
                fontSize: 10,
                textShadow: '1px 1px black'
              }
            }}
            labelComponent={<CustomLabel />}
          />
        </>
      ) : (
        <div className='empty-right-pane'>
          <h1>Choose A Server</h1>
        </div>
      )}
    </div>
  )
}
