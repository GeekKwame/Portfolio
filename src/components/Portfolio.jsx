import React from 'react'

import Espot from "../assets/images/Espot.jpg"
import unidate from "../assets/images/unidtae.jpg"
import weather from "../assets/images/weather.jpg"
function Portfolio() {
const portfolios=[
  {
    id:1,
    src:Espot,
    link1:"http://ackahkelvin.pythonanywhere.com",
    link2:"https://github.com/Ackahkelvin45/Espot-Ecommernce-"
  },
  {
    id:2,
    src:unidate,
   link1:"",
   link2:"https://github.com/Ackahkelvin45/unidate"
  },
  {
    id:3,
    src:weather,
    link1:"",
    link2:"https://github.com/Ackahkelvin45/WeatherAPP"
  }
]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-stone-900 to-gray-800 w-full text-white md:h-screen -mt-12'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-3xl font-bold'>
          Portfolio
        </p>
        <p className='py-4'>Check out some of my work here</p>
        </div>
      
      <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0 justify-center sm:justify-self-auto'>
     
            {
              portfolios.map(({id,src,link1,link2})=>(
                <div className='shadow-md shadow-gray-600 rounded-lg w-52 sm:w-auto '  >
     
     <img src={src} alt='' className='rounded-t-lg hover:scale-105 duration-300 ' ></img>
     <div className='flex items-center justify-center'>
     <button className='w-1/2 px-6 m-4 hover:scale-125 duration-300 ease-out'><a href={link1}  target="_blank" rel="noreferrer">Demo</a></button>
     <button className='w-1/2 px-6 m-4 hover:scale-125 duration-300 ease-out'><a  href={link2} >code</a></button>
     </div>
     </div>  
            
      

              ))
            }
         
      
      </div>
      </div>
    </div>
  )
}

export default Portfolio