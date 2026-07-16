import React from 'react'


const Skills = ({skills}) => {
  return (
    <div>
      <section id='Skills' className='min-h-screen bg-[#070B18] text-white text-center'>
        <span className='text-2xl uppercase text-violet-500 font-bold'>My Skills</span>
        <h2 className='text-3xl hidden md:block lg:text-4xl'>Technologies I Master</h2>
        <div className="skillsContainer cursor-pointer gap-2 min-h-screen grid grid-cols-1 p-2 pt-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          {
            skills.map((d)=>(
             <div className="skillsWrapper border shadow-amber-400 shadow-2xl rounded-xl flex items-center gap-1" key={d.id}>
              <h2>{d.icon}</h2>
              <div className='w-full flex flex-col'>
                <div className="titleBar flex flex-col w-full">
                <h3 className='text-left'>{d.name}</h3>
                <div className="Bar bg-violet-500 h-2 rounded-xl" style={{width:d.percent}}></div>
                
              </div>
             
              </div>
               <p>{d.percent}</p>
             </div>
            ))
          }
        
        </div>
      </section>
    </div>
  )
}

export default Skills
