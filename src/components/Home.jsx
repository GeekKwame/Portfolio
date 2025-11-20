import React from 'react'
import {MdOutlineArrowForwardIos} from "react-icons/md"
import laptop from "../assets/109028-react-and-node-development-mobile-first.json"
import { Player  } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-scroll';


const Home = () => {


  return (
    <div name="home" className='h-screen  w-full  bg-gradient-to-b from-stone-900  to-gray-800    '>
      <div className='flex flex-col justify-center  items-center h-full  mx-auto w-screen md: max-w-screen-lg text-white  md:ml-0   lg:flex-row md:justify-between  ' >
  <div  className='justify-center  mt-24  lg:ml-20  ml-3    md:mt-44 lg:mt-20      w-auto ' >
  <h1 className='text-2xl md:text-3xl'>Hi There,<span >👋</span></h1>
    <h2 className='text-4xl sm:text:4xl font-bold'>I am a Full Stack Developer</h2>
    <p  className='text-gray-400'>
    I build and design modern web applications using React
     for the frontend and Python/Django for the backend. 
     I’m currently focused on improving my skills as a 
     full-stack developer and creating clean, responsive, 
     and user-friendly interfaces with tools like Tailwind CSS. 
    </p>
    
   <Link className=' group w-fit px-6 py-2 my-3 md:my-3  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-xl group-hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 duration-1000' to='portfolio' smooth duration={500}>Portfolio <MdOutlineArrowForwardIos className='group-hover:rotate-90 ml-2 duration-200   '/></Link>


    </div>
    <div className='hidden md:flex  '>
    <Player autoplay loop src={laptop} style={{width:'500px',height:"500px"}}  >
  
</Player>
</div>
  <div className='flex  md:hidden mr-16'>
    <Player autoplay loop src={laptop} style={{width:'300px',height:"300px",position:"sticky",overflow:"hidden"}}  className="" >
  
</Player>
</div>
 

  </div>
      
    </div>
  )
}

export default Home