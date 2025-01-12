import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
    // navitems array intialization
    const navitem =[
        {id:1,name:"Home",link:"/"},
        {id:2, name:"Weather", link:"/"},
        
        {id:3,name:"Climate", link:"/"},
    ];
    return (
    <div>
        {/* logo of app */}
        <div>
            <h2 className='text-4xl text-blue-900 font-bold'>Nimbus 
                <span className='text-yellow-500'> Now </span>
            </h2>
        </div>
        <div>
            {/* navbar items lists */}
            <div>
               <ul> 
                {/* acessing elements from the navitem array */}
                {navitem.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.link}>
                        {item.name}
                        </Link>
                    </li>
                ))}
               </ul>
            </div>
            {/* login Now Button */}
            <div>
                <Link to="/">

                Login Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar