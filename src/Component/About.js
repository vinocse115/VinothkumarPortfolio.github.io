import React from 'react'
import Lolo from "./logo192.png"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='container'>
    <div className='row'>
    <div className='col-12 text-center py-4'>
    <h1>About</h1>
    <hr/>
    </div>
    </div>

    <div className='container my-3'>
    <div className='row'>
    <div className='col-md-6 mx-auto'>
    <img src={Lolo} alt="Vinothkumar" height="300px" width="300px"/>
    </div>
    <div className='col-md-6'>
    <h1 className='display-5 mb-4'>Vinothkumar M</h1>
    <p className='lead mb-5'>Software engineer with 6 month's experience in React JS. Skilled in web development, back-end development, and product development. Passionate about developing user-friendly applications and creating scalable software.</p>

    <div className="progress my-4">
    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
    <span className='pro'>45%</span>
  </div>
  <div className="progress my-4">
    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">React</div>
    <span className='pro'>35%</span>
  </div>
  <div className="progress my-4">
    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
    <span className='pro'>40%</span>
  </div>
  <div className="progress my-4">
    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">CSS</div>
    <span className='pro'>60%</span>
  </div>
  <div className="progress my-4">
    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div>
    <span className='pro'>80%</span>
  </div>

    </div>
    
    </div>
    </div>
    </div>
    <hr/>
    <div className='container'>
    <div className='row'>
    <div className='col-12 py-4'>
    <h3 className='text-right'>I have expreince in both IT and Non-IT Sector</h3>
    <span className='d-flex justify-content-between py-4'>
    <div className='progress1 col-6  ms-4 py-4 border bg-light'>
    <h4>IT Sector</h4>
    <p>From July 2022, Last six months start to Learn Full Stock Developer in ReactJs. Currently done a Mutliple project's in ReactJs and HTML, usinCSS for style and JavaScript for Validation purpose. Also learned libraries like Bootstrap etc.,</p>
    <NavLink className=" mt-4 me-4" to ="/resume">Project Information&gt;&gt;</NavLink> 
    </div>
    <div className='progress1 col-6  ms-4 py-4 border bg-light'>

    
    <h4>Non-IT Sector</h4>
    <p>I Have 9+ years experience in Non-IT Sector in different oranisastion in different platform and different projects</p>
    <NavLink className=" mt-4 me-4" to ="/resume">For Detailed Information&gt;&gt;</NavLink> 
    </div>
    </span>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default About