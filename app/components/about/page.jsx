import React from 'react'

const About = () => {
  return (
    <div className='text-black min-h-screen bg-gray-50 p-8'>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are dedicated to helping you find the perfect place to call home. Whether you are buying, selling, or renting, we are here to guide you every step of the way.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to revolutionize the real estate experience by providing transparent, efficient, and personalized services. We believe that everyone deserves a home that fits their lifestyle and budget, and we work tirelessly to make that a reality for our clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">500+</h3>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">1000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-blue-500">CEO & Founder</p>
            </div>
             {/* Team Member 2 */}
             <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-blue-500">Lead Agent</p>
            </div>
             {/* Team Member 3 */}
             <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-blue-500">Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
