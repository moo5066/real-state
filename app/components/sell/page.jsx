import React from 'react'
import Link from 'next/link';
const Sell = () => {
  return (
    <div className='text-black min-h-screen bg-gray-50 p-8'>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">List Your Property</h1>
        <p className="text-gray-600 text-center mb-8">
          Fill out the form below to list your property for sale.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Title */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
              <input 
                type="text" 
                placeholder="e.g. Modern Apartment in City Center" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input 
                type="number" 
                placeholder="e.g. 450000" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input 
                type="text" 
                placeholder="e.g. New York, NY" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Beds */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <input 
                type="number" 
                placeholder="e.g. 2" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Baths */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
              <input 
                type="number" 
                placeholder="e.g. 2" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Sqft */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
              <input 
                type="number" 
                placeholder="e.g. 1200" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

             {/* Image URL */}
             <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input 
                type="text" 
                placeholder="https://example.com/image.jpg" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea 
                rows="4"
                placeholder="Describe your property..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          <Link
          href="/buy" 
            type="submit" 
            className="w-full flex block text-center justify-center bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            List Property
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Sell
