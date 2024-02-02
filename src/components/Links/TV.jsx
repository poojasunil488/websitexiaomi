import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TV.css';

function TV(){
    return(
        <div className="tv">
            <div className="carousal">
            <Carousel className='mt-3'>
             <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/268_operator_in/20/11/2023/ae144f41f17608e6baa6c0cc5e4d71c5.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/314_operator_in/10/01/2024/48f326e4361be57534d22536a9179510.jpg?f=webp&thumb=1&q=85'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/694_operator_in/20/11/2023/17fcf1a8a249853dc6269e558252b9b6.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/186_operator_in/20/11/2023/2ec331adb5d7d32a0ff131eca3dec61a.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      </Carousel>
      </div>

      {/* --------------------------------------------------------------------------- */}

      <div className='text-center'>
<div className="TV">
         <h2>TV</h2> </div>  
<div className="view">
       <a  href="/alltv"><button style={{backgroundColor:'black'}} ><span style={{color:'white'}}>View More</span></button></a>
  
</div>      
 </div>
       {/* ---------------------------------------------------- */}

            <Carousel className='mt-3'>
            <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/273_operator_in/20/11/2023/746613389b841f3bb2d5ac6c08c925ac.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
             <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/265_operator_in/10/01/2024/ebe0f75dfeb1a81ad32513b176672ed9.jpg?f=webp&thumb=1&q=85'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/777_operator_in/20/11/2023/a88851f2ac3e910f8b7f018c73f43af9.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/580_operator_in/08/01/2024/739837a9d5e3f74905c92469404c7424.jpg?f=webp&thumb=1&q=85'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/174_operator_in/25/07/2023/8119e28956ee21591bc7629fcc78cc90.png?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      </Carousel>
      {/* ------------------------------------------------------------------------------------ */}

      <div className='container-fluid d-flex'>
    <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
 <div className="btn-bt">
    <Button variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
 </div>
  <img className="img1" src="https://i03.appmifile.com/282_item_in/12/01/2024/d97d6dcbb689aad88e69014ae2604063.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/371_item_in/05/01/2024/0983f1498810a733e7963f560ea0df8f.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Redmi Note 13G</h3>
    <h4>From $17,999</h4>
  </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1660640971.88075342.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
 <div className="texted">
    <h3>Redmi Note 13G</h3>
    <h4>From $17,999</h4>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1660640971.88075342.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
</div>
<div className="container-fluid d-flex">
<div className='divisions mt-3'>
  <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
  
  </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/282_item_in/12/01/2024/d97d6dcbb689aad88e69014ae2604063.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
  
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i03.appmifile.com/371_item_in/05/01/2024/0983f1498810a733e7963f560ea0df8f.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
  
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650993021.84395849.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
  
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i03.appmifile.com/221_item_in/06/10/2023/227c990c57ec7eb8ad960d00cb7f9d0c.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  
</div>
<div className="container-fluid d-flex">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/282_item_in/12/01/2024/d97d6dcbb689aad88e69014ae2604063.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
  
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i03.appmifile.com/371_item_in/05/01/2024/0983f1498810a733e7963f560ea0df8f.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
 <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
 </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650993021.84395849.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i03.appmifile.com/221_item_in/06/10/2023/227c990c57ec7eb8ad960d00cb7f9d0c.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  
</div>
<div className="container-fluid d-flex">
<div className='divisions mt-3'>
  <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
  </div>
<div className="btn-bt">
  
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
</div>
  <img className="img1" src="https://i03.appmifile.com/282_item_in/12/01/2024/d97d6dcbb689aad88e69014ae2604063.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/371_item_in/05/01/2024/0983f1498810a733e7963f560ea0df8f.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <div className="texted">
    <h3>Xiaomi TV A Series</h3>
    <p>10% Bank Offer</p>
  
  </div>
  <div className="container-button">
   <div className="btn-bt">
      <Button variant="dark" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Learn More</Button>
   </div>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650993021.84395849.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
  <h1><span style={{textAlign:'center',marginTop:'46px'}}>All TV</span></h1>
  <a href="/All Tv"><img style={{marginTop:"64px"}} width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>

</div>
<div className='text-center mt-5'>
       <h2>TV Accessories</h2> 
       <a  href="/tvaccessories"><button style={{backgroundColor:'black'}} ><span style={{color:'white'}}>Learn More</span></button></a>
       </div>

       <div className="container-fluid d-flex">
    <div className='divisions-3 mt-3'>
  <h3>Xiaomi TV Stick 4K</h3>
  <div className="btn-bt">
    <Button   variant="dark" size="sm">Buy Now</Button>
    <Button  variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img2" src="https://i02.appmifile.com/500_operator_in/14/02/2023/28d2e4d0f93f8b162776aa609e781b72.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions-3 mt-3 ms-2'>
  <h3>Mi TV Stick</h3>
  <div className="btn-bt">
    <Button    variant="dark" size="sm">Buy Now</Button>
    <Button  variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img2" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1596559950.75387025.png?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions-3 mt-3 ms-2'>
  <h3>TV 32/32 Pro Wall Mount Black</h3>
 <div className="btn-bt">
    <Button    variant="dark" size="sm">Buy Now</Button>
    <Button   variant="secondary" size="sm">Learn More</Button>
 </div>
  <img className="img2" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1524635324.71848791.png?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions-3 mt-3 ms-2'>
  <h3>Xiaomi Bluetooth Voice Remote</h3>
  <div className="btn-bt">
    <Button    variant="dark" size="sm">Buy Now</Button>
    <Button   variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img2" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1678446775.87548519.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
</div>

<div className='text-center mt-3'>
       <h2>Smarter Living</h2> 
       <a  href="/smartliving"><button style={{backgroundColor:'black'}}><span style={{color:'white'}}>Learn More</span></button></a>
       </div>
{/* ------------------------------------------------------------------------------- */}


<Container>
      <Row className="d-flex gap-2">
        <Col className="col1">
        <div className="text1">
          <span>Xiaomi Smart Air Fryer</span>
          <p>India's only smart air fryer</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Dark</Button>
        <Button variant="light">Link</Button>
         </div>
         <img className="img3" src="https://i02.appmifile.com/45_operator_in/03/03/2023/53c4d235841b7de69cd4ee22f8c86d66.jpg?f=webp&thumb=1&w=500&q=85" alt="" />

        </Col>
        <Col className="col2">
        <div className="text2">
          <span>Xiaomi Smart Air Fryer</span>
          <p>India's only smart air fryer</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Dark</Button>
        <Button variant="light">Link</Button>
         </div>
         <img className="img3" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1657393587.11333510.jpg?f=webp&thumb=1&w=500&q=85" alt="" />
         </Col>
      </Row>
      </Container>
            {/* ------------------------------------------------------------------------------- */}

      <div className='text-center mt-3 '>
       <h2>Smart Appliances</h2> 
       <a  href="/smartappliances"><button style={{backgroundColor:'black'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
       {/* ----------------------------------------------------------------------------------- */}
  
 <div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1681310643.96395064.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1681311205.12135276.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1658400388.2213048.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Appliances</span>
</div> 
 <a href="/tv"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
  {/* ------------------------------------------------------------ */}

  <div className='text-center mt-3 '>
       <h2>Security Cameras</h2> 
       <a  href=""><button style={{backgroundColor:'black'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>


{/* ------------------------------------------------------------------------- */}
<Container>
      <Row className="d-flex gap-2">
        <Col className="col1">
        <div className="text1">
          <span>Mi 360 Home Security Camera 2K Pro</span>
          <p>1080p 2i</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Buy Now</Button>
        <Button variant="light">Learn More</Button>
         </div>
         <img className="img3" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1638345123.88957524.jpg?f=webp&thumb=1&w=500&q=85" alt="" />

        </Col>
        <Col className="col2">
        <div className="text2">
          <span>Mi 360 Home Security Camera 2K Pro</span>
          <p>1080p 2i</p>
        </div>
        <div className="btn-4 gap-3 d-flex">
        <Button variant="dark">Buy Now</Button>
        <Button variant="light">Learn More</Button>
         </div>
         <img className="img3" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1657105733.93229769.jpg?f=webp&thumb=1&w=500&q=85" alt="" />
         </Col>
      </Row>
      </Container>

{/* ------------------------------------------------------------------------- */}

<div className='text-center mt-3 '>
       <h2>Smart Light</h2> 
       <a  href=""><button style={{backgroundColor:'black'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>

{/* ------------------------------------------------------------------------------- */}
<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart TV X43 2023</h3>
    <p>10% Bank Offer</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1616606687.68573462.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Smart LED Bulb</h3>
    <p>Lamp 1s</p>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1571914613.44793569.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi Smart BedSide</h3>
    <p>Lamp 2</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1574669860.58966823.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Smart Lights</span>
</div> 
 <a href="/All Tv"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>

{/* ------------------------------------------------------------ */}

<div className='text-center mt-3 '>
       <h2>Our Services</h2> 
       <p>Trusted.Secure.Reliable</p>
       </div>
  {/* ---------------------------------------------------- */}
    
      


   </div>
    )
}
export default TV



