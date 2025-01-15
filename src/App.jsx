import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar/Navbar'
import Weather from './components/weather/Weather'
import News from './components/news/News'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Weather/>
        <Routes>
        <Route exact path="/news" element={<news/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
