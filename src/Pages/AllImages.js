import React, { useEffect, useState } from 'react'
import { accessImageApi } from '../ApiServices/AllApis'
import Header from '../Components/Header'
import './allImages.css'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'






function AllImages() {

    const [allimg,setAllImg]=useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(8);

    const getImages=async()=>{
        const out = await accessImageApi()
        // console.log(out);
        setAllImg(out.data)
      }
      console.log(allimg);
      useEffect(()=>{
        getImages()
      },[])


      const indexOfLastImage = currentPage * imagesPerPage;
      const indexOfFirstImage = indexOfLastImage - imagesPerPage;
      const currentImages = allimg.slice(indexOfFirstImage, indexOfLastImage);

      // Calculate total pages
      const totalPages = Math.ceil(allimg.length / imagesPerPage);

      // Change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);


    
  return (
    <div>
        <Header></Header>
        



{allimg?.length > 0 ?
        <div>
            <h1 className='text-center py-3'>Our Entire Collections</h1>
            <Link className='text-center' to={'/gallery'} style={{textDecoration:'none',color:'white'}}>
  
<div className='mb-3 mx-5'>
            <button className='px-5 py-3 d-flex text-white btn-img' style={{color:"white",backgroundColor:"rgb(207, 80, 6)",border:'white',borderRadius:'30px'}}>View by Category</button>
  
</div>  
    
  </Link> 
          <Container>
            <Row className='justify-content-center'>
              {currentImages.map(i => (
                <Col lg={3} md={4} sm={6} key={i.id} className='mb-4 d-flex justify-content-center'>
                  <Card className='shadow-lg border-0' style={{ width: '18em' }}>
                    <div className='card-cont'>
                      <img src={i.imageUrl} style={{ cursor: 'pointer', width: '100%', height: '290px' }} alt={i.title} />
                    </div>
                    <p className='text-center pt-3 fw-bold text-uppercase' style={{letterSpacing:'2px'}}>{i.title}</p>
                  </Card>
                </Col>
              ))}
            </Row>

            <Pagination className='justify-content-center'>
              {[...Array(totalPages).keys()].map((number) => (
                <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                  {number + 1}
                </Pagination.Item>
              ))}
            </Pagination>

          </Container>
        </div>
        :
        <div className='text-center'>
          <h1>No Photo available</h1>
        </div>      
      }

      <Footer></Footer>


    </div>
  );
}




        
      
   
export default AllImages
