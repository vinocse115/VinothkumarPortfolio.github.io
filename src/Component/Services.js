import React from 'react'
import Projects from '../projects/Projects';
import DATA from "./Data"

const Services = () => {
  const card = (props) => {
    return(
      <div className="col-md-4 mb-5 pb-5">
      <div className="card text-center py-5" key={props.id}>
      <img src={props.img} className="card-Img-top mx-auto p-2" all={props.title}/>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      
      </div>
      </div></div>
    );
  }
  return (
   
    <div>
    <div className='container'>
    <div className='row'>
    <div className="col-12 text-center py-4 mb-5">
    <h1>Services</h1>
    <hr/>

    </div>
    <div className='row'>
    {DATA.map(card)}
    </div>
    </div>
    </div>
    <Projects/>
    </div>

  )
}

export default Services