import React from 'react'
import first from "../assets/images/experience/1.png"
import second from "../assets/images/experience/2.png"
import third  from "../assets/images/experience/3.png"
import fourth from "../assets/images/experience/4.png"

import sixth from "../assets/images/experience/5.png"


function Experience() {
  const experencies=[
    {
      id:1,
     src:first,
     name:"HTML",
     style:"shadow-orange-500"
    },
    {
      id:2,
     src:second,
     name:"Javascript",
     style:"shadow-yellow-500"
    },
    {
      id:1,
     src:third,
     name:"React",
     style:"shadow-blue-500"
    },
    {
      id:1,
     src:fourth,
     name:"CSS",
     style:"shadow-sky-500"
    },
   
    {
      id:1,
     src:sixth,
     name:"Python",
     style:"shadow-blue-500"
    },
  ]
  return (
  <div name="experience" className='bg-gradient-to-b from-gray-800 to-stone-800 w-full h-screen -mt-10'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-3xl  font-bold '>
            Experience
          </p>
          <p className='py-4'>These are the Technologies I've Worked With</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-4 sm:px-0'>
        {
          experencies.map(({id,src,name,style})=>(
            <div className={'shadow-md  hover:scale-105 duration-500 rounded-lg ' +style}>
            <img src={src} alt="" className='mx-auto w-20'>

            </img>
            <p className='mt-3 text-sm'>{name}</p>
          </div>
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Experience