import React from 'react';
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBBtn
  } from 'mdb-react-ui-kit';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

	const year = new Date().getFullYear();

	return (
		<MDBFooter className='bg-primary text-center text-white'>
		  <MDBContainer className='p-4 pb-0'>
			<section className='mb-4'>
			  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
			  <MDBIcon><FacebookIcon/></MDBIcon>
			  </MDBBtn>
	
			  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
			  <MDBIcon><TwitterIcon/></MDBIcon>
			  </MDBBtn>
	
			  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
			  <MDBIcon><GitHubIcon/></MDBIcon>
			  </MDBBtn>
			  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
			  <MDBIcon><LinkedInIcon/></MDBIcon>
			  </MDBBtn>
			</section>
		  </MDBContainer>
	
		  <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
		  {year} &copy; Copyright all riht reserved:
			<a className='text-white' href='https://mdbootstrap.com/'>
			  ABC.com
			</a>
		  </div>
		</MDBFooter>
	  );
}

export default Footer