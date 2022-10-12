import React from 'react'

function Contact() {
  return (
    <div name="contact" className='bg-gradient-to-b from-stone-800 to-gray-800 -mt-4 h-screen w-full text-white'>
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
      <div >
<p className='text-3xl font-bold '>
  Contact
</p>
<p className='py-5'> Submit the form below to get in touch with me</p>


      </div>
      <div className='flex justify-center items-center'>
        <form action='https://getform.io/f/c4f4ae38-f3f7-4d70-9105-349149b580d8' method='post' className='flex flex-col w-2/3 md:w-1/2'>
        <input name='name' className='bg-transparent p-2 active:outline-none rounded-md border-2 text-white' placeholder='Enter your name'></input>
        <input name='email' className='bg-transparent p-2 active:outline-none rounded-md border-2 text-white my-4' placeholder='Enter your email'></input>
<textarea  rows={8} name='message' className='bg-transparent p-2 active:outline-none rounded-md border-2 text-white' placeholder='Enter your message'>

</textarea>
<button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 mx-auto my-6 flex items-center justify-center hover:scale-105 hover:from-blue-500 hover:to-cyan-500 duration-500 rounded-lg text-white'>Let's Talk</button>
        </form>
      </div>
    </div></div>
  )
}

export default Contact