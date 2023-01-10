import React from 'react' 
import { NavLink } from 'react-router-dom';


const Header = () => {  
    
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand"  to ="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavLink className="nav-link" to ="/" activeStyle={{color:"red"}}>Home</NavLink>  
          <NavLink className="nav-link"  to ="/about" activeStyle={{color:"red"}}>About</NavLink>
          <NavLink className="nav-link" to ="/services" activeStyle={{color:"red"}}>Services</NavLink>
          <NavLink className="nav-link" to ="/resume" activeStyle={{color:"red"}}>Testimonial</NavLink>
          <NavLink className="nav-link" to ="/contact" activeStyle={{color:"red"}}>Contact</NavLink>
          
    
          </div>
    </div>
  </div>
</nav>



 
      </>
      );
}

export default Header;