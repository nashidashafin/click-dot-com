import React, { useEffect } from 'react'
import Header from '../Components/Header'
import './gallery.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { accessImageApi, addImageApi, deleteImageApi } from '../ApiServices/AllApis';
import Category from '../Components/Category';
import { Col, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';






function Gallery() {

  const [imageInput,setImageInput]=useState({
    title:"",
    description:"",
    category:"",
    imageUrl:""
   
  })

  //to auto refresh when add new img

  const [imgUpdate,setImgUpdate]=useState(false)

  const [allImages,setAllImages]=useState([])

    const [showModal1, setShowModal1] = useState(false);
    const [show, setShow] = useState(false);


    //sel
    const [selectedImage, setSelectedImage] = useState(null);

    //search

    const [search,setSearch]=useState('')

  // // pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const categoriesPerPage = 1;

   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal1 = (image) => {
      setSelectedImage(image);
      setShowModal1(true);
    };

    const setDatas=(e)=>{
      console.log(e.target.value);
      console.log(e.target.name);
  
      let {value,name}=e.target
      setImageInput({...imageInput,[name]:value})
    }
  
    console.log(imageInput);







    //adding image
    const addImage = async()=>{
      const {title,description,category,imageUrl} = imageInput
      if(title=="" || description=="" || category=="" || imageUrl==""){
        alert("Please fill all fields")
      }
      else{
        const res = await addImageApi(imageInput)
        console.log(res);
        // setImageInput(res);

        if(res.status>=200 && res.status <300){
          alert("Image adding successfull")
          
          handleClose()
          setImgUpdate(true)
        }


      }

      

    }

    //get image

    const getImages=async()=>{
      const out = await accessImageApi()
      // console.log(out);
      setAllImages(out.data)
    }

    console.log(allImages);

    useEffect(()=>{
      getImages()
    },[imgUpdate,search])

    //group by category

     const groupImagesByCategory = (images) => {
    return images.reduce((acc, image) => {
      const { category } = image;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(image);
      return acc;
    }, {});
  };

  const groupedImages = groupImagesByCategory(allImages);

  // const indexOfLastCategory = currentPage * categoriesPerPage;
  // const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  // const currentCategories = Object.keys(groupedImages).slice(indexOfFirstCategory, indexOfLastCategory);
  // const totalPages = Math.ceil(Object.keys(groupedImages).length / categoriesPerPage);
  // const pageItems = [];
  // for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
  //   pageItems.push(
  //     <Pagination.Item key={pageNumber} active={pageNumber === currentPage} onClick={() => setCurrentPage(pageNumber)}>
  //       {pageNumber}
  //     </Pagination.Item>
  //   );
  // }


  //delete
  const deleteImage=async(id)=>{
    const result = await deleteImageApi(id)
    if(result.status>=200 && result.status<300){
     //state changes to true, when success
    //  updateDelets(true)
     
     getImages()
     handleCloseModal1()
    }
   }

   //search
   const searchData=()=>{
    const data = allImages.filter(i=>
      ((i.title+i.category).toLowerCase().trim().includes(search.toLowerCase().trim()))
    )
    setAllImages(data)
     
   }

   const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', url.substring(url.lastIndexOf('/') + 1)); // Sets the file name to the image name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <Header></Header>

      {/* <div className='backgound-image'>
      <h1 className="overlay-text">Welcome to Our Photography Gallery</h1>
      <p className="overlay-text section">Welcome to our photography gallery, where every picture tells a story. Explore the beauty, emotion, and inspiration captured through the lenses of talented photographers.</p>
      </div> */}
      <div className='container w-75 d-flex mt-5 justify-content-between'>  <div className="input-group">
    <input className='form-control p-2' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
    <span className="input-group-text" onClick={searchData} style={{cursor:'pointer'}}><i className="fa-solid fa-magnifying-glass"></i></span>
  </div>
  
  
<Link to={'/allImages'} style={{textDecoration:'none',color:'white'}}>
<div>
      <button images={allImages} className='btn px-5 d-flex text-white btn-img' style={{color:"white",backgroundColor:"rgb(207, 80, 6)",border:'white',borderRadius:'30px'}}>All Images</button>
  
</div>  
</Link> 
</div>  
  

     
     

{Object.keys(groupedImages).length > 0 ? (
        Object.keys(groupedImages).map((category, index) => (
          <div key={index} className='mt-2 image-row'>
            
            <Category cat={category}></Category>
            <div className='images'>
              {groupedImages[category].map((image, idx) => (
                <img key={idx} onClick={() => handleShowModal1(image)} className='img-row' src={image.imageUrl} width='20%' alt="" />
              ))}
              <img onClick={handleShow} style={{ cursor: "pointer" }} src="https://i.postimg.cc/tCFWZ6jS/add-image.png" width='20%' alt="" />
             
            </div>
          </div>
          
        ))
      ) : (
        <h1>No images posted yet</h1>
      )}
      {/* <Pagination className='mt-3 justify-content-center'>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} />
        {pageItems}
        <Pagination.Next onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} />
      </Pagination> */}



<Modal
        show={showModal1}
        onHide={handleCloseModal1}
        backdrop="static"
        keyboard={false}
      >
        

          <Modal.Title><img src={selectedImage?.imageUrl} width='100%' height="350px"/></Modal.Title>
       
        <Modal.Body>
          <h2>{selectedImage?.title}</h2>
          <p>{selectedImage?.description}</p>
          <i class="fa-solid fa-xl fa-download"   onClick={() => downloadImage(selectedImage?.imageUrl)}
          style={{
                  position: 'absolute',
                  bottom: '160px',
                  right: '10px',
                  color: '#cf5006',
                  cursor: 'pointer'
                }}></i>
          <i onClick={()=>deleteImage(selectedImage?.id)} class="fa-solid fa-xl fa-trash" style={{color:"#cf5006"}}></i>
        </Modal.Body>
        <Modal.Footer>
            
          <Button className='px-4 py-2' style={{border:'0',borderRadius:"20px"}} variant="success" onClick={handleCloseModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
                  <Modal.Title className='py-3 text-center'><h2>Click<span>.com</span></h2></Modal.Title>

          <Modal.Title className='px-3'>Add Your Photography</Modal.Title>
        <Modal.Body>
        <FloatingLabel 
        controlId="floatingTitle"
        label="Title"
        className="mb-2"
      >
        <Form.Control name='title'  type="text" placeholder="Title" onChange={(e)=>setDatas(e)}/>
      </FloatingLabel>
      <FloatingLabel  controlId="floatingDescription" label="Descrition" className="mb-2" >
        <Form.Control name='description'  type="text" placeholder="Descrition" onChange={(e)=>setDatas(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCategory" label="Category" className="mb-2" >
        <Form.Control name='category'  type="text" placeholder="Category" onChange={(e)=>setDatas(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingImageUrl" label="Image Url" className="">
        <Form.Control name='imageUrl'  type="text" placeholder="Image Url" onChange={(e)=>setDatas(e)} />
      </FloatingLabel>
        </Modal.Body>
        
          <div className='d-flex my-4 ms-2 justify-content-end'>
              <Button style={{border:'0',borderRadius:"20px"}} className='ms-3 modal-btn px-4 py-2' variant="success" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={addImage} style={{backgroundColor:"#cf5006",border:'0',borderRadius:"20px"}} className='mx-3 px-4 py-2' variant="primary">Upload</Button>
          </div>
        
      </Modal>

<Footer></Footer>

    </div>
  )
}

export default Gallery
