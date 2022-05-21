import { VictoryLabel } from 'victory'

const CustomLabel = props => {
  return (
    <>
      <VictoryLabel {...props} x={385} textAnchor='end' text={({datum}) => datum.y} />
      <VictoryLabel {...props} x={200} textAnchor='middle' />
    </>
  )
}

export default CustomLabel
