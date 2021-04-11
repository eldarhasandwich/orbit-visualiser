
import { Orbit } from '../Orbits/Orbit'
import { Card } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';

const AddOrbitModal = (props: {
  addOrbitFn: (orbit: Orbit) => void
}) => {

  const { addOrbitFn } = props

  const [ e, setE ] = useState(0)
  const [ a, setA ] = useState(0)
  const [ i, setI ] = useState(0)
  const [ long, setLong ] = useState(0)
  const [ arg, setArg ] = useState(0)
  const [ t, setT ] = useState(0)

  const filterInput = (input: string): number => {
    return parseInt(input.replace(/\D/g,'')) || 0
  }

  const resetInput = () => {
    setE(0)
    setA(0)
    setI(0)
    setLong(0)
    setArg(0)
    setT(0)
  }

  return (
    <Card
      size="small"
      title="Orbit"
      style={{ width: 300 }}
      extra={<a onClick={() => { 
        addOrbitFn({
          eccentricity: e,
          semimajorAxis: a,
          inclination: i,
          longitudeOfAscendingNode: long,
          argumentOfPeriapsis: arg,
          trueAnomaly: t,
        })
        resetInput()
      }}>Create</a>}
    >
      <Input addonBefore='Eccentricity' value={e} onChange={e => setE(filterInput(e.target.value))}/>
      <Input addonBefore='Semimajor Axis' value={a} onChange={e => setA(filterInput(e.target.value))}/>
      <Input addonBefore='Inclination' value={i} onChange={e => setI(filterInput(e.target.value))}/>
      <Input addonBefore='Long. of Acend.' value={long} onChange={e => setLong(filterInput(e.target.value))}/>
      <Input addonBefore='Arg. of Peri.' value={arg} onChange={e => setArg(filterInput(e.target.value))}/>
      <Input addonBefore='True Anomaly' value={t} onChange={e => setT(filterInput(e.target.value))}/>
    </Card>
  )
}

const OrbitListItem = (props: {
  id: string
  orbit: Orbit
  rmOrbitFn: (id: string) => void
}) => {

  const { id, orbit, rmOrbitFn } = props

  return (
    <Card
      size="small"
      title="Orbit"
      style={{ width: 300 }}
      extra={<a onClick={() => { rmOrbitFn(id) }}>Delete</a>}
    >
      <p> Eccentricity {orbit.eccentricity} </p>
      <p> Semimajor Axis {orbit.semimajorAxis} </p>
      <p> Inclination {orbit.inclination} </p>
      <p> Longitude of Ascending Node {orbit.longitudeOfAscendingNode} </p>
      <p> Argument of Periapsis {orbit.argumentOfPeriapsis} </p>
      <p> True Anomaly {orbit.trueAnomaly} </p>
    </Card>
  )
}

const OrbitList = (props: {
  orbits: { id: string, orbit: Orbit }[]
  addOrbitFn: (orbit: Orbit) => void
  rmOrbitFn: (id: string) => void
}) => {

  const { orbits, addOrbitFn, rmOrbitFn } = props

  return (
    <div>
      {
        orbits.map(o =>
          <OrbitListItem
            id={o.id}
            orbit={o.orbit}
            rmOrbitFn={rmOrbitFn}
          />
        )
      }

      <AddOrbitModal
        addOrbitFn={addOrbitFn}
      />

    </div>
  )
}

export default OrbitList