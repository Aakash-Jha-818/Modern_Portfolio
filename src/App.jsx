import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { Calendar,CodeXml,Contact,Smile,Trophy,Mail } from 'lucide-react'
import Skills from './components/Skills'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,FaGithub,FaInstagram,FaLinkedin} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Projects from './components/Projects'
import Project1 from '../src/assets/Project1.jpg'
import Project2 from '../src/assets/Project2.jpg'
import Project3 from '../src/assets/Project3.jpg'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
const App = () => {
 const aboutIcons=[
  {
    id:1,
    title:"Years Experienced",
    icon:<Calendar/>,
    no:1.5+"+",
  },
  {
    id:2,
    title:"Projects Completed",
    icon:<CodeXml />,
    no:20+"+",
  },
  {
    id:3,
    title:"Happy Clients",
    icon:<Smile />,
    no:30+"+",
  },
  {
    id:4,
    title:"Client Satisfaction",
    icon:<Trophy />,
    no:100+"%",
  }
 
 ]
const skillData = [
  {
    id: 1,
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    name: "HTML",
    percent: "95%"
  },
  {
    id: 2,
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    name: "CSS",
    percent: "85%"
  },
  {
    id: 3,
    icon: <FaJs className="text-5xl text-yellow-400" />,
    name: "JavaScript",
    percent: "90%"
  },
  {
    id: 4,
    icon: <FaReact className="text-5xl text-cyan-400" />,
    name: "Reactjs",
    percent: "85%"
  },
  {
    id: 5,
    icon: <SiNextdotjs className="text-5xl text-white" />,
    name: "Nextjs",
    percent: "70%"
  },
  {
    id: 6,
    icon: <SiTypescript className="text-5xl text-blue-600" />,
    name: "TypeScript",
    percent: "60%"
  },
  {
    id: 7,
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    name: "Node.js",
    percent: "75%"
  },
  {
    id: 8,
    icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
    name: "Tailwind CSS",
    percent: "70%"
  },
  {
    id: 9,
    icon: <FaGitAlt className="text-5xl text-orange-600" />,
    name: "Git",
    percent: "65%"
  }
];
const projectCards=[
  {
    id:"01",
    name:"E-Commerce Platform",
    description:"Full Stack e-commerce solution with modern UI/UX",
    img:Project1,

  },
  {
    id:"02",
    name:"Portfolio 2025",
    description:"Modern Portfolio with modern UI/UX and design",
    img:Project2,

  },{
    id:"03",
    name:"Social Media Platform(InstaVerse)",
    description:"A Instagram like full stack social media platform following modern tech stack",
    img:Project3,
  }
]
const socialLinks=[
  {
    id:1,
    icon:<FaGithub className='text-3xl text-white' />,
    link:"https://github.com/Aakash-Jha-818",

  },
  { id:2,
    icon:<FaLinkedin className='text-3xl text-blue-400'/>,
    link:"https://www.linkedin.com/in/aakashjha7/",
  },
  { id:3,
    icon:<FaInstagram className='text-3xl text-red-500'/>,
    link:"https://www.instagram.com/aakash.jha.07/"

  },
  { id:4,
    icon:<Mail className='text-3xl text-red-400' />,
    link:"mailto:aakashjha819@gmail.com"
  }
]
  return (
    <div className='box-border m-0 p-0'>
      <Navbar />
      <main>
        <Hero />
        <About data={aboutIcons}/>
        <Skills skills={skillData}/>
        <Projects project={projectCards}/>
       <ContactMe social={socialLinks} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
