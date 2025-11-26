import React, { useEffect, useRef, useState } from 'react'
import first from "../assets/images/experience/1.png"
import second from "../assets/images/experience/2.png"
import third  from "../assets/images/experience/3.png"
import fourth from "../assets/images/experience/4.png"
import sixth from "../assets/images/experience/5.png"

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getGradientClass = (style) => {
    const colorMap = {
      'shadow-orange-500': 'from-orange-400 to-orange-600',
      'shadow-yellow-500': 'from-yellow-400 to-yellow-600',
      'shadow-blue-500': 'from-blue-400 to-blue-600',
      'shadow-sky-500': 'from-sky-400 to-sky-600',
    };
    return colorMap[style] || 'from-cyan-400 to-cyan-600';
  };

  const experencies=[
    {
      id:1,
     src:first,
     name:"HTML5",
     style:"shadow-orange-500",
     level:95
    },
    {
      id:2,
     src:second,
     name:"JavaScript",
     style:"shadow-yellow-500",
     level:88
    },
    {
      id:3,
     src:third,
     name:"React",
     style:"shadow-blue-500",
     level:85
    },
    {
      id:4,
     src:fourth,
     name:"CSS3",
     style:"shadow-sky-500",
     level:90
    },
    {
      id:5,
     src:sixth,
     name:"Python",
     style:"shadow-blue-500",
     level:82
    },
  ]
  return (
  <div name="experience" ref={sectionRef} className='bg-gradient-to-b from-gray-800 to-stone-800 w-full min-h-screen py-20'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-4xl md:text-5xl font-bold mb-4'>
            Experience
          </p>
          <p className='py-4 text-gray-300 text-lg'>Technologies I work with to build modern, scalable applications</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-center px-4 sm:px-0'>
        {
          experencies.map(({id,src,name,style,level}, index)=>(
            <div 
              key={id}
              className={`group shadow-md hover:shadow-xl hover:scale-110 duration-500 rounded-xl p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 transition-all ${style} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
            <div className='flex justify-center items-center mb-4'>
              <img src={src} alt={name} className='mx-auto w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300' />
            </div>
            <p className='mt-3 text-sm md:text-base font-semibold'>{name}</p>
            <div className='mt-4 w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
              <div 
                className={`h-full bg-gradient-to-r ${getGradientClass(style)} transition-all duration-1000 ease-out`}
                style={{ width: isVisible ? `${level}%` : '0%', transitionDelay: `${(index * 100) + 300}ms` }}
              ></div>
            </div>
            <p className='text-xs text-gray-400 mt-2'>{level}%</p>
          </div>
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Experience
