import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {

  const [search,setSearch] = useState('')

  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}}>
            <Navbar.Brand href="#home" className='text-white d-flex'>
              <img
                alt=""
                src="https://i.postimg.cc/kgRdsT0H/photo-camera.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Click<span>.com</span>
  
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
