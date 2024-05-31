import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='bg-dark'>
      <Row className='text-white ps-4 py-4 '>
        <Col lg={3} md={6} className=''>

        <Link to={'/'} style={{textDecoration:'none'}}>
            <div style={{fontSize:'20px',color:'white'}}>
                <img
                        alt=""
                        src="https://i.postimg.cc/kgRdsT0H/photo-camera.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{' '}
                      Click<span>.com</span>
            </div>
        </Link>

            {/* <h4>PROJECT MASTER</h4> */}
            <p>Explore a diverse collection of stunning images, carefully curated and categorized to cater to all your visual desires. Whether you're seeking the serenity of nature, the vibrancy of urban life and all.</p>
            </Col>
        <Col lg={3} md={6} className='d-flex flex-column'>
            <h5 style={{color:"#cf5006"}}>Links</h5>
<Link to={'/allImages'} style={{textDecoration:'none'}}>
                <a href='' style={{textDecoration:'none',color:'white'}}>All Images</a>
    
</Link>           
<Link to={'/gallery'} style={{textDecoration:'none'}}>
     <a href="" style={{textDecoration:'none',color:'white'}}>View by Category</a>
    
</Link>        </Col>
        <Col lg={3} md={6}>
            <h5 style={{color:"#cf5006"}}>Guids</h5>
            <h6>React</h6>
            <h6>Bootstrap</h6>
            <h6>React Bootstrap</h6>
        </Col>
        <Col lg={3} md={6} className='pe-5'>
            <h5 style={{color:"#cf5006"}}>Contact Us</h5>
            <input type="email" placeholder='Email' className='form-control pe-5' />
            <div className='text-center mt-2'><button className='btn btn-light text-danger'><b>Send</b></button></div>
            <div className='d-flex justify-content-around mt-3'>
            <i class="fa-brands fa-github" style={{color:"#cf5006"}}></i>
            <i class="fa-brands fa-linkedin" style={{color:"#cf5006"}}></i>
            <i class="fa-brands fa-twitter" style={{color:"#cf5006"}}></i>
            <i class="fa-brands fa-facebook" style={{color:"#cf5006"}}></i>
            <i class="fa-brands fa-instagram" style={{color:"#cf5006"}}></i>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
