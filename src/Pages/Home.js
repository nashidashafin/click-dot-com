import React from 'react'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='m-5'>
        <h1 className='text-center'>Click<span>.com</span> : Capture Moments, Curate Memories</h1>
        <p style={{fontSize:'20px'}} className='text-center mt-4'>Welcome to Click<span>.com</span>, your ultimate destination for breathtaking photography.
             Explore a diverse collection of stunning images, carefully curated and categorized
              to cater to all your visual desires. Whether you're seeking the serenity of nature,
               the vibrancy of urban life, or the artistry of abstract photography, Click<span>.com</span> 
               has it all. Immerse yourself in the beauty of each photograph, 
               easily navigate through various categories, and download your favorite images to cherish forever. 
               Discover the world through our lens and let each click inspire your own creative journey.</p>
<div className='text-center my-3'>
<Link to={"/gallery"}>
                   <button className='btn p-3' style={{color:"white",backgroundColor:"rgb(207, 80, 6)",border:'white',borderRadius:'30px'}}>Discover the World Through Our Lens</button>
  
</Link>  
</div>      </div>
      
    </div>
  )
}

export default Home
