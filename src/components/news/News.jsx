import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
const News = () => {
    // declaring the news variable
  const[news,setNews]=useState();
//   state for handling loading
const[loading,setLoading]=useState(true);

// hook used to fetch data after components loads
useEffect(()=>{
    const fetchNews=async()=>{
        try{
            // used tp fetch data using news api
            const response= await axios.get("https://newsapi.org/v2/everything?q=Apple&from=2025-01-15&sortBy=popularity&apiKey=6b624cdaee814e87a8a26e3dd171492f");
            // used to store articles in state variable
            setNews(response.data.articles)
            // set loading to false after data is fetched to stop loading
            setLoading(false)
        }
        catch(error){
            console.log("Error fetching data"); 
            // handles any error in data
            setLoading(false)
        }
    }
    // calls the fetch function
    fetchNews();
},[])
// shows loading message when the message is fetched
if(loading){
    return<div className='text-3xl '>The News is loading....</div>
}
return(
    <div className="py-10 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Top News</h2>
      {/* Flex container for news cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3"
          >
            {/* Article image */}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              {/* Article title */}
              <h3 className="font-bold text-lg">{article.title}</h3>
              {/* Article description */}
              <p className="text-gray-600 mt-2">
                {article.description || "No description available."}
              </p>
              {/* Link to full article */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
export default News