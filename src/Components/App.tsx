import { useState } from 'react';
import OrbitList from './OrbitList';
import { v4 as uuidv4 } from 'uuid';

import { Orbit } from '../Orbits/Orbit'

interface UuidOrbit {
  id: string
  orbit: Orbit
}

function App() {

  const [ orbitList, updateOrbitList ] = useState<UuidOrbit[]>([])

  const addOrbitToList = (newOrbit: Orbit): void => {
    updateOrbitList( [ ...orbitList, { id: uuidv4(), orbit: newOrbit} ] )
  }

  const deleteOrbitById = (id: string): void => {
    updateOrbitList( orbitList.filter(o => o.id !== id) )
  }

  return (
    <div>

      <OrbitList
        orbits={orbitList}
        addOrbitFn={addOrbitToList}
        rmOrbitFn={deleteOrbitById}
      />
      
    </div>
  );
}

export default App;
