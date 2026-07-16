import { MoveUpRight,CornerDownRight } from 'lucide-react'
import React from 'react'
import StackIcon from 'tech-stack-icons'

const ContactMe = ({social}) => {
  return (
    <div>
      <section id='Contact' className='min-h-screen bg-[#070B18] p-4 grid items-center grid-cols-1 md:grid md:grid-cols-3'>
        <div className="invite flex pt-2 flex-col gap-2">
            <h4 className='uppercase text-violet-500 text-xl font-bold'>Let's Work Together</h4>
            <h5 className='text-white text-2xl font-bold'>Have a project in mind?</h5>
            <p className='text-white'>I'm always open to discussing new projects and opportunities.
                Let's create something amazing together!
            </p>
            <button className='px-2 py-2 flex w-fit rounded-xl text-2xl items-center font-bold text-white bg-violet-700 gap-2'>Get in Touch<MoveUpRight size={20}/></button>
        </div>
        <div className="testimonial flex flex-col text-center">
            <h4 className='text-white text-xl font-bold uppercase'>Testimonial</h4>
            <div className="para flex gap-1 items-center text-white"><CornerDownRight size={100}/> <p className='text-white'>Aakash is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding.</p></div>
            <div className="pfp flex gap-1 text-white justify-center items-center">
                <img src="https://randomuser.me/api/portraits/men/81.jpg" alt=""  className='rounded-full h-1/2 object-cover' />
                <div className='flex flex-col justify-center gap-1'>
                     <h3 className='text-xl font-bold'>Floyed Wagner</h3>
                     <h3 className='text-xl font-light'>CEO, TechStart</h3>
                </div>
               
            </div>
        </div>
        <div className="socials flex flex-col gap-4  text-center">
            <h2 className=' font-bold text-xl uppercase text-violet-500'>Follow me</h2>
            <div className="links flex justify-evenly pt-2">
                
                {
                    social.map((ac)=>(
                        <div key={ac.id}><a href={ac.link}>{ac.icon}</a>
                        </div>
                    ))
                }
               
            </div>
             

        </div>
      </section>
    </div>
  )
}

export default ContactMe
