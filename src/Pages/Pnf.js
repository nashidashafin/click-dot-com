import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div>
        <Header></Header>
       <div className=' m-5 d-flex align-items-center'>
      
      <img style={{width:'50%'}} src="https://i.postimg.cc/85z7z6FS/not-found-removebg-preview.png" alt="" />
      <div className='d-flex flex-column'>
          <h1 className='text-center'>Oops, Page not found</h1>
<Link to={'/'} className='text-center'>
              <button className='py-2 px-4' style={{color:"white",backgroundColor:"rgb(207, 80, 6)",border:'white',borderRadius:'30px'}}>Back to home</button>
    
</Link>      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Pnf
