import React from 'react'
import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react'; // Using lucide-react for icons

import Link from 'next/link';
import Image from 'next/image';

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

<div className='bg-white border-gray-200 border-2 rounded-lg mx-auto w-3/4 py-7 px-3 flex justify-between items-center mt-10 gap-5'>
  <div className='flex  space-x-3 border-gray-300 border-2 rounded-lg p-2 px-3 items-center'>
<CiSearch className='text-2xl'/>
<p className='text-gray-500'>Search by location or property name...</p>
  </div>

  <div className='border border-gray-300 p-2 px-auto rounded-lg items-center'>
<select>
  <option value="location">All Types</option>
  <option value="property">House</option>
  <option value="property">Apartment</option>
  <option value="property">Villa</option>
  <option value="property">PentHouse</option>
  <option value="property">Loft</option>
</select>
  </div>

  <div className='border border-gray-300 p-2 px-auto rounded-lg items-center '>
<select>
  <option value="location">All Prices</option>
  <option value="property">Under $500,000</option>
  <option value="property">$500,000 - $1M</option>
  <option value="property">$1M-$2M</option>
  <option value="property">Above $2M</option>
</select>
  </div>

 

</div>




 <div className="max-w-sm mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg bg-white font-sans border border-gray-100 hover:shadow-xl transition-shadow duration-300">

  <div>
<div className='p-4'>
    <h1 className='text-3xl font-bold'>All Properties</h1>
    <p className='text-gray-500'>8 properties found</p>
  </div>
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image 
          src="https://villascroatia.com/wp-content/uploads/2020/08/modern-luxury-villa-pool-medulin-croatia-01-2.jpg"
          alt="Modern Luxury Villa"
          fill
          className="object-cover"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            Featured
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-lg shadow-sm">
            Villa
          </span>
        </div>
        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Modern Luxury Villa</h2>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm font-medium">Beverly Hills, CA</span>
        </div>

        {/* Property Specs */}
        <div className="flex items-center gap-6 text-gray-600 mb-6 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-2">
            <Bed size={20} className="text-gray-400" />
            <span className="font-semibold">5</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-gray-400" />
            <span className="font-semibold">4</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={18} className="text-gray-400" />
            <span className="font-semibold text-sm">4500 sqft</span>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-extrabold text-blue-600">
            $2,850,000
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-md active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
</div>
     
    </div>
  )
}

export default page 
