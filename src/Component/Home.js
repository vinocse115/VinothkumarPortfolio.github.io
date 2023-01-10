import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Lolo from "./logo192.png"
import Resume from './Resume'
import Services from './Services'

const Home = () => {
  return (
    <>
   <div className='container my-5 me-7 mt-5 mb-10 py-4 d-flex'>
   <div className='row'>
   <div className='col-5 my-3'>
   <h1>I'm Vinothkumar M <br/>Full Stock Web Developer</h1>
   <p className='lead mb-4'>Software engineer with experience in React JS. Skilled in web development, back-end development, and product development. Passionate about developing user-friendly applications and creating scalable software.</p>

   <NavLink className="btn btn-outline-primary mt-4 me-4" to ="/contact" role="button">Hire Me</NavLink>
   <NavLink to ="assets/img/Rishabh-Singh-Resume.pdf" download="Vinothkumar's Resume" target='_blank'>
<button type="button" class="btn btn-primary mt-4">Download Resume</button>
</NavLink>
   </div>
   <div className='col-md-7 d-flex justify-content-center align-item-center'>
   <img src={Lolo} alt="Vinoth" height="300px" width="300px"/>

 
   </div>
   </div>
 
   </div>
   <About/>
   <Services/>
   <Resume/>
   <Contact/>
    </>
  )
}

export default Home