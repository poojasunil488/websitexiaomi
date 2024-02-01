import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './lap.css'

function Lap() {
  return (
    <div className='lap'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/852_operator_in/03/01/2024/e8e5d489a9e12e8727ea96acaf0985bf.jpg?f=webp"
              alt="First slide"
            />
            <div className='imageover'>
              {/* <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/485_operator_in/03/01/2024/18652702a24931ab5a0082de0db2b316.jpg?f=webp"
              alt="Second slide"
            />
            <div className='imageover'>
              {/* <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Carousel.Item>
        </Carousel>
        { /* --------------------------------------------------------------------------------------- */ }
        
        <div className='lap-text mt-2 '>
<div className='laptexts'>
           <h2 >Tablets</h2> 
    
</div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>

       <Container>
      <Row className="d-flex gap-2">
        <Col className="col4">
        <div className="text4">
          <span>Xiaomi Pad 5 | Lowest Price Ever</span>
          <p style={{fontSize:'15px'}}>2.5K Resolution |120Hz Refresh Rate
Flat ₹3,000 Bank Offer</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Buy Now</Button>
        <Button variant="light">Learn More</Button>
         </div>
         <img className="img4" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650896467.04424744.jpg?f=webp&thumb=1&w=500&q=85" alt="" />

        </Col>
        <Col className="col5">
        <div className="text5">
          <span>Xiaomi Pad 6</span>
          <p style={{fontSize:'15px'}}>Snapdragon® 870 | Quad Speakers
Flat ₹2,000 Bank Offer</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Buy Now</Button>
        <Button variant="light">Learn More</Button>
         </div>
         <img className="img4" src="https://i03.appmifile.com/387_operator_in/09/10/2023/04e1d4056cceb7910377478110c555c1.jpg?f=webp&thumb=1&w=500&q=85" alt="" />
         </Col>
      </Row>
      </Container>
      {/* ----------------------------------------------------------------------------- */}
      <div className='lap-text mt-2 '>
<div className='laptext'>
           <h2>Tablet Accessories</h2> 
    
</div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'740px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
       {/* ------------------------------------------------------------------------------------------ */}

       <div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/469_item_in/12/06/2023/98e8bbded166e99011684f41b417c8ee.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart LED Bulb</h3>
    <p>Lamp 1s</p>
 </div>
  <div className="btn-bt">
    <Button variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/917_item_in/12/06/2023/3d2e72c017654b2dbb6be25343c1c69c.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi Smart BedSide</h3>
    <p>Lamp 2</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/396_item_in/12/06/2023/a2f6eb051ada73b3c31b78c4ef75397c.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Smart Lights</span>
</div> 
 <a href="/All Tv"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>

{/* ------------------------------------------------------------------------------------------- */}
<div className='lap-text mt-2 '>
<div className='laptext'>
           <h2>Our Services</h2> 
    
</div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
       <Container>
      <Row className="d-flex gap-2 p-2">
        <Col className="col1">
       <div className='astyle mt-5'>
        <a style={{marginLeft:'280px',textDecoration:'none',color:'black'}} href="">Reward Mi</a>
       </div>
         <img style={{height:'150px',marginLeft:'250px'}} className="img3" src="https://i03.appmifile.com/615_operator_in/08/12/2022/320b20dae03a71ed68293bb7d5982948!260x260.gif" alt="" />

        </Col>
        <Col className="col2">
        <div className='astyle mt-5'>
        <a style={{marginLeft:'280px',textDecoration:'none',color:'black',fontSize:'20px'}} href="">Mi Extended Warranty</a>
       </div>
         <img style={{height:'110px',marginLeft:'300px',marginTop:'70px'}} className="img3" src="https://i03.appmifile.com/563_operator_in/08/12/2022/ee55c57d5e6e42a6c4e787d111a8c1cc!260x260.png" alt="" />
         </Col>
      </Row>
      </Container>

    </div>
  )
}

export default Lap