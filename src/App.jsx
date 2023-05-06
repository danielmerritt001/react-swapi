import { useState } from 'react'
import './App.css'

import Starships from './pages/starships/Starships'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1>hello</h1>
      <Starships />
    </>
  )
}

export default App
