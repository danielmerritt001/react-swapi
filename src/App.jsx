import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Starships from './pages/starships/Starships'
import StarshipPage from './pages/starship-page/Starship-Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1>hello</h1>
      <Routes>
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:shipId" element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
