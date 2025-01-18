import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import News from './pages/news/News'
import Weather from './pages/weather/Weather'
import Home from './pages/home/Home'
import Cat from './pages/cat/cat'
function App() {
  return (
    <>
      <Router>
        {/* top Navbar */}
        <Navbar/>
        {/* home section */}
        <Routes>
          {/* route to News and Weather */}
        <Route exact path="/news" element={<News/>} />
        <Route exact path="/weather" element={<Weather/>}/>
        <Route exact path="/cat" element={<Cat/>}/>
        </Routes>
        <Home/>
      </Router>
    </>
  )
}

export default App
