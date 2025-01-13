import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaX, FaBars} from "react-icons/fa6";

function Navbar() {
    // navitems array intialization
    const navitem =[
        {id:1,name:"Home",link:"/"},
        {id:2, name:"Weather", link:"/"},
        
        {id:3,name:"Climate", link:"/"},
    ];
    // creating state for responsive design
    const[open,setOpen]=useState(false)
    // adding action on event by defining function
    const onToggle=()=>{
        setOpen(!open)
    }
    return (
    <div className='flex items-center md:px-28 px-6 h-[8ch] w-full gap-6 border justify-between'>
        {/* logo of app */}
        <div className='flex item-center justify-center w-[25%]'>
            <h2 className='md:text-4xl text-2xl text-blue-900 font-bold flex-nowrap md:flex-wrap'>Nimbus 
                <span className='text-yellow-500'> Now </span>
            </h2>
        </div>
        {/* button for ontoggle event */}
         {/* Toggle button */}
         <button onClick={onToggle} className="w-8 h-8 rounded-md md:hidden flex text-xl pt-1.5 justify-end">
                {
                    open ?
                    <FaX />
                    :
                    <FaBars />
                }
            </button>
        <div className={`${open ? 'flex' : 'hidden'} md:flex items-center justify-between md:bg-transparent bg-red-600
                    md:flex-row flex-col md:relative absolute md:top-0 top-20 left-0 w-full h-auto gap-5 
                    md:gap-14 p-4 md:p-0 backdrop-blur-3xl transition-transform md:shadow-none shadow-md rounded-md`}>
            {/* navbar items lists */}
            <div className='flex md:flex-row flex-col items-center justify-center'>
               <ul className='list-none flex md:flex-row flex-col gap-5'> 
                {/* acessing elements from the navitem array */}
                {navitem.map((item)=>(
                    <li key={item.id} className='text-xl font-extralight'>
                        <Link to={item.link} >
                        {item.name}
                        </Link>
                    </li>
                ))}
               </ul>
            </div>
            {/* login Now Button */}
            <div className='flex md:flex-row flex-col'>
                <Link to="/" className='px-6 py-2 rounded-full bg-neutral-800  text-neutral-50'>

                Login Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar