import React from 'react'

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web design",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interface",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and database",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    description: "Combining both frontend and backend development skills",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team",
  },
]

const Services = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          My Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition'
            >
              <h3 className='text-2xl font-bold mb-4'>
                {service.title}
              </h3>

              <p className='text-gray-400'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services