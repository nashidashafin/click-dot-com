import React from 'react'
import './category.css'
import { images } from './images';


function Category({cat}) {

    const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="category" style={{ backgroundImage: `url(${randomImage})` }}>
        
      <h1>{cat}</h1>
    </div>
  )
}

export default Category
