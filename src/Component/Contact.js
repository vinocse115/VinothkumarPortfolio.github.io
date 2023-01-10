import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77tl60m",
        "template_4wdvwce",
        form.current,
        "ZFS2fAybJE5rfSU25")
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
    e.target.reset()
  };

  return (
    <div>
      <div className='contact' id="#contact">
        <div className='container'>
        <div className='row'>
        <div className='col-12 text-center py-4'>
        <h1>Contact Me</h1>
        <hr/>
        </div>
        </div>
        <div className='container my-5'>
        <div className='row'>
        <div className='col-md-6 mx-auto'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-1">
                    <label for="exampleInputPassword1" className="form-label" >Full Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="name" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" >Subject</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="subject" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
              </div>

              <div className='col-md-5'>
              <table >
              <thead><h1>Contact details</h1></thead>
    <hr/>
    
    <tbody class="table table-borderless">
    <tr className='container row' >
    <th className='py-1'>16, Muslim mettu street,</th>
    <th className='py-1'>Kannamanalam, Arni Taluk,</th>
    <th className='py-1'>Thiruvannamalai, Tamil Nadu,</th>
    <th className='py-1'>India: 632311.
    </th>
    </tr>
    </tbody>
    </table>
    </div>
    
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className='container'>
        <div className='row'>
        <div className='col-12'>
      <h1>oole Map location</h1>
      <hr/>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Contact