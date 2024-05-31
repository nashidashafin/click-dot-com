import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
       <div className='d-flex'>
            <img
              className="d-block"
              src="https://i.postimg.cc/h4ww5yy9/dog-7694676-1280.jpg"
              width='25%'
              
            />
            <img
              className="d-block"
              src="https://i.postimg.cc/hvgH2fPf/bird-8666099-1280.jpg"
              width='25%'
              
            />
            <img
              className="d-block"
              src="https://i.postimg.cc/fyqh2m2B/tawny-owl-7777285-1280.jpg"
              width='25%'
              
            />
             <img
              className="d-block"
              src="https://i.postimg.cc/3NvPBVGJ/ai-generated-8700383-1280.jpg"
              width='25%'
              
            />
       </div>
       
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        
      </Carousel.Item> */}
    </Carousel>
    </div>
  )
}

export default Banner
