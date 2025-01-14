import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Weather from './components/Weather'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Weather/>
      </Router>
    </>
  )
}

export default App
