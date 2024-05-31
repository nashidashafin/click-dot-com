import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/kgRdsT0H/photo-camera.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Click<span>.com</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar
