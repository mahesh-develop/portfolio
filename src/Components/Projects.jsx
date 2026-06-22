import React from 'react'
import hotelbook from '../assets/hotelbook.jpeg'
import weather from '../assets/weather.jpeg'
import calculater from '../assets/calculater.png'

const projects = [
  {
    id: 1,
    name: 'Hotel Booking',
    technologies: 'MERN Stack',
    image: hotelbook,
    github: 'https://github.com/mahesh-develop',
  },
  {
    id: 2,
    name: 'Weather App',
    technologies: 'MERN Stack',
    image: weather,
    github: 'https://github.com/mahesh-develop',
  },
  {
    id: 3,
    name: 'Calculator',
    technologies: 'JavaScript',
    image: calculater,
    github: 'https://github.com/mahesh-develop',
  }
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          My Projects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'
            >
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-48 object-cover'
              />

              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>
                  {project.name}
                </h3>

                <p className='text-gray-400 mb-4'>
                  {project.technologies}
                </p>

                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'
                >
                GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects