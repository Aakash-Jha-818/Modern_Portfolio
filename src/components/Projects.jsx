import React from 'react'
import { MoveRight } from 'lucide-react'

const Projects = ({project}) => {
  return (
    <div>
      <section id='Projects' className='min-h-screen bg-[#070B18] text-center p-4 flex justify-center flex-col gap-4'>
        <h1 className='text-2xl uppercase text-violet-500 font-bold'>Featured Projects</h1>
        <div className='blockContainer block'>
            <div className="projectsContainer flex flex-col md:grid grid-cols-3 p-4 shadow-2xl shadow-sky-400 gap-1 rounded-2xl border border-amber-100">
            {
                project.map((item)=>(
                    
                    <div key={item.id}>
                        <div className=' transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-blue-600 text-white p-3  border-2 border-orange-500 relative rounded-2xl p-4 w-full'>
                        <img src={item.img} alt="" className='h-full w-full object-cover' />
                            <div className="no absolute top-4 left-4 rounded-4xl bg-amber-400 text-white font-bold px-2 py-1">{item.id}</div>
                            <button  className='px-2 py-2 absolute bottom-5 flex items-center gap-1 text-white font-bold right-5 bg-amber-400 rounded-2xl'><a href="https://github.com/Aakash-Jha-818">View Project</a><MoveRight size={20} /></button>
                            
                    </div>
                    <div className="about font-mono pl-1">
                        <h3 className='text-xl font-bold text-white text-left '>{item.name}</h3>
                        <p className='text-white text-left'>{item.description}.</p>
                    </div>
                    </div>
                    
                ))
            }
            
        </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
