import React from 'react'
const page = () => {
  return (
    <div className='text-black'>
      <div className='bg-blue-600 w-full h-100'>
        <h1 className='text-white text-6xl font-bold text-center pt-20'>Find Your Dream Home</h1>
        <p className='text-white pt-5 text-center text-2xl'>Discover the perfect property from our extensive collection</p>

<div className='text-white pt-5 flex justify-center gap-10 items-center'>
  <div className='bg-blue-500 p-2 px-3 text-center rounded-lg'>
    <h1 className='text-3xl font-bold'>2,500+</h1>
    <p>Properties</p>
    </div>
  <div className='bg-blue-500 p-2 px-3 text-center rounded-lg'>
    <h1 className='text-3xl font-bold'>1,200+</h1>
    <p>Happy Clients</p>
    </div>
  <div className='bg-blue-500 p-2 px-5 text-center rounded-lg'> 
    <h1 className='text-3xl font-bold'>50+</h1>
    <p>Cities</p>
    </div>
  
</div>

      </div>
    </div>
  )
}

export default page 
