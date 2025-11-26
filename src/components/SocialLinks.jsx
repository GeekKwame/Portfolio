import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <> LinkedIn<FaLinkedin size={30}/> </>
      ),
      href: "https://www.linkedin.com/in/edmund-blessing/",
      style: "rounded-tr-md",
      color: "hover:bg-blue-600",
      label: "Connect on LinkedIn"
    },
    {
      id: 2,
      child: (
        <> Github<FaGithub size={30}/> </>
      ),
      href: "https://github.com/GeekKwame",
      style: "",
      color: "hover:bg-gray-800",
      label: "View my GitHub"
    },
    {
      id: 3,
      child: (
        <> Mail<HiOutlineMail size={30}/> </>
      ),
      href: "mailto:dogbeblessingkwame@gmail.com",
      style: "rounded-br-md",
      color: "hover:bg-red-600",
      label: "Send me an email"
    },
  ]

  return (
    <div className='flex-col fixed text-white top-[43%] left-0 hidden md:flex z-40'>
      <ul>
        {links.map((link) => (
          <li 
            key={link.id} 
            className={`flex justify-between items-center w-32 h-12 px-4 bg-gradient-to-r from-gray-700 to-gray-800 ml-[-80px] hover:ml-[-10px] duration-300 transition-all group border-r-2 border-transparent hover:border-cyan-500 ${link.style} ${link.color} shadow-lg hover:shadow-cyan-500/50`}
          >
            <a 
              href={link.href} 
              className='flex justify-between items-center w-full text-sm font-medium group-hover:scale-105 transition-transform duration-300' 
              target="_blank" 
              rel="noreferrer"
              aria-label={link.label || link.child.props.children[0]}
              title={link.label}
            > 
              {link.child} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks