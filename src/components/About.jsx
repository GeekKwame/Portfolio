import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-stone-900 text-white -mt-7'  >
       <div className='max-w-screen-lg pl-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold '>About</p>
        </div>
        <p className=' text-mdl '>
   My name is kelvin Ackah,a full stack web developer .I am a student of the Kwame Nkrumah University of Science and technology offering computer science.
   I believe  web design can be more diverse and inspiring.
   I am very passionate about what i do and i work hard to bring cutting-edge,pixel perfect and  beautiful interfaces to my 
   clients 
</p>
<br/>
<p className='text-md'>
I use python's frame work django as my back-end design and use react and CSS framework tailwind for my front-end design.
I  also use javascript in the building of my websites. 
</p>

</div>
    </div>
  )
}

export default About