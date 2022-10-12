import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"



function SocialLinks() {
  const links =[
  {
    id:1,
    child:(
     <> LinkedIn<FaLinkedin size={30}/> </>
    ),
    href:"https://www.linkedin.com/in/kelvin-ackah-9045a0235/",
    style:"rounded-tr-md"
  },
  {
    id:2,
    child:(
     <> Github<FaGithub size={30}/> </>
    ),
    href:"http://github.com/ackahkelvin45",
    style:" "
  },
  {
    id:3,
    child:(
     <> Mail<HiOutlineMail size={30}/> </>
    ),
    href:"mailto:ackahkevin455@gmail.com",
    style:"rounded-br-md"
  },
  
 

  ]
return (    <div className='flex-col  fixed text-white    top-[43%] hidden md:flex' >
      <ul>
      {
        links.map((link) =>(
          <li key={link.id} className={"flex justify-between items-center w-32 h-10 px-4 bg-gray-600  ml-[-80px]  hover:rounded-xl duration-[400] hover:ml-[-15px]  "   + link.style} ><a href={link.href}  className='flex justify-between items-center  w-full'  target="_blank" rel="noreferrer" > {link.child} </a></li>
        ))
      }
        
      </ul>
    </div>
  )
}

export default SocialLinks