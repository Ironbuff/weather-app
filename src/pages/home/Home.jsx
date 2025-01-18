import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="h-[calc(100vh-8ch)] bg-neutral-300 bg-no-repeat bg-center bg-cover flex flex-row justify-center items-center gap-6"
    style={{
      backgroundImage: "url('https://cdn.pixabay.com/photo/2023/12/12/19/08/moutains-8445767_1280.jpg')",
    }}>
      <button className="px-6 py-4 text-2xl font-semibold bg-neutral-900 text-neutral-50 rounded-full shadow-lg hover:bg-neutral-700 transition">
        <Link to="/weather">Weather Information</Link>
      </button>
      <button className="px-6 py-4 text-2xl font-semibold bg-neutral-900 text-neutral-50 rounded-full shadow-lg hover:bg-neutral-700 transition">
        <Link to ="/news">Weather Information</Link>
      </button>
      <button className="px-6 py-4 text-2xl font-semibold bg-neutral-900 text-neutral-50 rounded-full shadow-lg hover:bg-neutral-700 transition">
        <Link to="/cat">Cat Fact</Link>
      </button>
    </div>
  )
}

export default Home