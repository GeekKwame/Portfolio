import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'
function NavBar() {
  const [nav,setNav]=useState(false)
  const links=[
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:"about"
    },
    {
      id:3,
      link:"portfolio"
    },
  
    {
      id:4,
      link:"contact"
    },
    {
      id:5,
      link:"experience"
    }
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed   bg-stone-900 px-4'>
    <h1 className='text-4xl  font-header  '>EDMUND BLESSING</h1>
    <div>
    <ul className=' hidden md:flex'>
      {links.map(links =>(
  
      
        <li className='px-4 cursor-pointer capitalize   text-gray-400 rounded-xl p-1 mr-3 hover:bg-slate-900 hover:scale-125 transition ease-out hover:text-white' key={links.id}>
<Link to={links.link}  smooth duration={500}>{links.link}</Link>
</li>


      ))}
 
      </ul>
      <button className='cursor-pointer z-10 text-gray-400 md:hidden'        onClick={()=>{setNav(!nav) }}>
  { nav? <FaTimes size={30}/>:<FaBars size={30} /> }
</button>
{nav&& 
  (
    <ul className=' flex flex-col justify-start absolute  items-center h-screen top-20 left-0 w-full bg-gradient-to-b from-stone-900  to-gray-800'>

{links.map(links =>(
<li  className='pt-10 text-3xl  '  key={links.id}>
<Link onClick={()=>{setNav(!nav)} }to={links.link}  smooth duration={500} >{links.link}</Link>

</li>
))}
</ul>
  )
}

    </div>
  </div>
  )
}

export default NavBar