import React from 'react'
import {Calendar} from 'lucide-react'

const About = ({data}) => {
  return (
    <div>
      <section id='About' className='min-h-screen pt-20 bg-[#070B18] flex justify-center text-white flex-col gap-5 md:flex md:flex-row md:justify-around md:items-center md:text-3xl lg:text-4xl  p-4'>
        
        <div className="div1 flex flex-col md:w-1/2 ">
            <span className='uppercase text-violet-500 text-2xl font-bold lg:text-4xl'>About Me</span>
            <h2 className='text-white font-bold text-3xl'>I'm passionate about creating digital solutions   </h2>
        <p className='leading-relaxed'>With 1.5 years of experience in web development,
            I help businesses and individuals, bring their idea to life,
            through clean, efficient,and user-friendy code.
        </p>
        </div>
        <div className="div2">
           <div className="aboutIcons flex flex-col gap-8 lg:grid lg:grid-cols-2">
         {
            data.map((item)=>(
                <div className='flex gap-2 items-center' key={item.id}>
                  <div className="icon bg-violet-900 p-1 rounded-2xl">{item.icon}</div>
                  <div className='flex flex-col'>
                    <h4>{item.no}</h4>
                    <p>{item.title}</p>
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

export default About
