import React, { useState, useEffect } from 'react'
import { VictoryBar } from 'victory'
import CustomLabel from './CustomLabel'

const replaceAll = originalStr => {
  const replaceStrArr = ['(NES)', '(SNES)', '(N64)']
  for (let str of replaceStrArr) {
    originalStr = originalStr.replace(str, '')
  }
  return originalStr.trim()
}

export default function Results ({ data }) {
  const [highest, setHighest] = useState(0)

  useEffect(() => {
    setHighest(0)
  }, [data])

  const options = () => {
    return data
      .map(game => {
        if (game.hasVoted?.length > highest) setHighest(game.hasVoted.length)
        return { x: replaceAll(game.title), y: game.hasVoted ? game.hasVoted.length : 0 }
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
              duration: 250,
              onLoad: { duration: 250 },
              onchange: { duration: 250 }
            }}
            style={{
              data: {
                fill: ({ datum }) => (datum.y >= highest ? 'gold' : 'teal'),
                width: 12
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
