import React, { useState, useEffect } from 'react'
import axios from 'axios'

const cat = () => {
  //   state variable to assign to api
  const [cat, setCat] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact");
        setCat(response.data.fact); //extract fact from api
        setLoading(false);
      }
      catch (error) {
        console.log("error in getting data");
        setLoading(false);
      }

    }
    fetchdata();
  }, [])
  if (loading) {
    return <div className='text-2xl flex items-center justify-center'>The cat fact is loading....</div>
  }
  return (
    <div className='w-full flex flex-col gap-y-6 h-[calc(100vh-8ch)] items-center justify-center bg-no-repeat bg-cover text-gray-100 '
      style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg)" }}>
      <div className='border-2 border-gray-800 backdrop-blur-sm'>
        <h1 className='flex items-center justify-center text-3xl font-extrabold border-slate-950 text-gray-800'> The Random Cat Fact</h1>
        {/* container to hold api data */}
        <div className='flex flex-wrap border-white text-2xl font-semibold border text-gray-800'>
          {cat}
        </div>
      </div>

    </div>
  )
}

export default cat