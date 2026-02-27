import React from 'react'

const Buy = () => {
  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      price: "$450,000",
      location: "New York, NY",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Cozy Suburban House",
      price: "$650,000",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Luxury Beachfront Condo",
      price: "$950,000",
      location: "Miami, FL",
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Spacious Family Home",
      price: "$720,000",
      location: "Seattle, WA",
      beds: 4,
      baths: 3,
      sqft: 2400,
      image: "https://images.unsplash.com/photo-1600596542815-22b8c36ebab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className='text-black min-h-screen bg-gray-50 p-8'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Find Your Dream Home</h1>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input 
            type="text" 
            placeholder="Search by city, neighborhood, or address" 
            className="w-full max-w-lg px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 w-full relative">
                 <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <h2 className="text-xl font-bold text-gray-800">{property.title}</h2>
                   <p className="text-blue-600 font-bold">{property.price}</p>
                </div>
                <p className="text-gray-500 mb-4">{property.location}</p>
                
                <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{property.beds}</span> Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{property.baths}</span> Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{property.sqft}</span> Sqft
                  </div>
                </div>
                
                <button className="w-full mt-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Buy
