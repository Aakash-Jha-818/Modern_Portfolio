import React from 'react'
import {MoveUpRight,Download} from 'lucide-react'
import StackIcon from 'tech-stack-icons'

const Hero = () => {
  return (
    <div>
      {/*  pt-20 to keep it below the fixed nav bar */}
      <section id='Home' className='min-h-screen p-4 md:p-8 pt-20 md:pt-25 bg-[#070B18] text-white '>
        <div className="heroContainer  flex gap-4">
            <div className="txt text-sm w-1/2 md:text-2xl md:w-1/2">
              <p className='uppercase text-blue-300'> I'm a web developer.</p>
                <h1 className='text-2xl'>Hi,I'm <span className='text-blue-500 font-semibold'>Aakash</span></h1>
                <h3 className='text-2xl'>I build things for the web.</h3>
                <br />  
                <p className='text-sm'>I'm a passionate web developer specializing in building exceptional digital experiences with modern techniques.</p>
                <br />
                <button className='px-5 py-3 cursor-pointer  text-[#FFFFFF] flex items-center gap-2 bg-violet-500 rounded-xl'>View My Work <MoveUpRight size={15}/></button>
                <br />
                <button className='px-6 py-3 cursor-pointer text-[#FFFFFF] flex items-center gap-2 border shadow-xl  rounded-xl'>Download CV <Download /></button>
            </div>
            <div className="pfp flex items-center justify-center w-full">
              <img 
    src="https://img.magnific.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740&q=80"
    alt="..."
    className="relative w-full h-1/2 md:w-1/2 rounded-full lg:w-1/2 lg:h-full items-center flex object-cover z-10"
  />
            </div>
        </div>
        <br />
        <div className="techStack uppercase font-serif text-amber-50 flex flex-col items-center gap-10">
           <h1 className="relative w-fit px-4 uppercase mx-auto bg-[#e8602e21] border  text-white/90 border-accent  md:text-2xl text-xl  font-machina font-light leading-none   inline-block">Technologies I work with<span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span><span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2"></span><span className="corner-dot-bl absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span><span className="corner-dot-br absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span></h1>
           
            <div className="stack flex gap-2 justify-between md:justify-evenly cursor-pointer w-full">
                <StackIcon name="mongodb" className='h-10 w-10' />
                <StackIcon name="expressjs" className='h-10 w-10 bg-amber-50'/>
               <StackIcon name="react" className='h-10 w-10' />
                <StackIcon name="nodejs" className='h-10 w-10'/>
                <StackIcon name='typescript' className='h-10 w-10'/>
                <StackIcon name='nextjs' className='h-10 w-10 bg-amber-50'/>
                <StackIcon name='docker' className='h-10  w-10'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero