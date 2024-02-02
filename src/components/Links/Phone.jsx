import React from 'react'
import  './phone.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Phone() {
  return (

    <div className='new'>
       <div className='text-center'>
       <h2>Xiaomi Series</h2> 
       <p>Be A Class Apart</p>
       <a  href="/Allxiaomiphones"><button style={{border:'none',backgroundColor:'black'}} ><span style={{color:'white'}}>All Xiaomi Phones</span></button></a>
       </div>
{/* ----------------------------------------------------------------------------------------------- */}
   <div className='image-field'>
    <img style={{height:'500px',width:'100%'}} src="https://i03.appmifile.com/127_operator_in/31/10/2023/d4ce42aebfe3a8323d61b06b5fbe48f4.jpg?f=webp" alt=""  />
    {/* <h1>XIAOMI 13 PRO</h1>
    <p style={{marginTop:'40px'}}>Dawn Of A New Camera Age</p> */}
   </div>
   {/* ---------------------------------------------------------------------------------------------- */}
   <div className='text-center'>
       <h2>Redmi Series</h2> 
       <p>The Performance Racer</p>
       <a  href="/Allredmiphones"><button style={{border:'none',backgroundColor:'black'}} ><span style={{color:'white'}}>All Redmi Phones</span></button></a>
       </div>
       {/* ---------------------------------------------------------------------------- */}
       <div className='image-field'>
    <img style={{height:'500px',width:'100%'}} src="https://i03.appmifile.com/928_operator_in/12/01/2024/6f9678a22bc693f047ce0a2d3d554ba3.jpg?f=webp" alt=""  />
    {/* <h1>XIAOMI 13 PRO</h1>
    <p style={{marginTop:'40px'}}>Dawn Of A New Camera Age</p> */}
   </div>

   <Carousel className='mt-3'>
      <Carousel.Item>
        
             <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/746_operator_in/10/01/2024/b1d93f19ed7a494ed981db5531cda629.jpg?f=webp"
             alt="First slide"
             interval = {1000}
           />

         
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/205_operator_in/09/01/2024/66e9efbe9993dd67a3e12528fd27c362.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/234_operator_in/30/01/2024/8b3af1c378d1f2575a46e489a3939466.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/929_operator_in/26/12/2023/d9bc334035f897f83fbbaaf78137bef0.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
    </Carousel>
<div className='container-fluid d-flex'>
    <div className='cards mt-3 ms-2'>
    <div className='heading-1'>
      <h3>Redmi Note 13G</h3>
      <h4>From $17,999</h4>
    </div>
   <div className='button-1'>
      <Button  variant="dark" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Learn More</Button>
   </div>
<div className='image-1'>
      <img src="https://i03.appmifile.com/573_item_in/04/01/2024/54cabe34bd58e615c5d1fdc6b8ed3c71.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>    </div>
    <div className='cards mt-3 ms-2'>
    <div className='heading-1'>
      <h3>Redmi Note 13G</h3>
      <h4>From $17,999</h4>
    </div>
   <div className='button-1'>
      <Button  variant="dark" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Learn More</Button>
   </div>
<div className='image-1'>
      <img src="https://i03.appmifile.com/18_item_in/05/12/2023/0e57f710c22813234127441579f39881.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div> 
   </div>
    <div className='cards mt-3 ms-2'>
    <div className='heading-1'>
      <h3>Redmi Note 13G</h3>
      <h4>From $17,999</h4>
    </div>
   <div className='button-1'>
      <Button  variant="dark" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Learn More</Button>
   </div>
<div className='image-1'>
      <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>    </div> 
</div>
<div className='cards2 container-fluid d-flex mt-2'>
    <div className='cards mt-3 ms-2'>
       <div className='heading-1'>
          <h3>Redmi Note 13G</h3>
          <h4>From $17,999</h4>
       </div>
        <div className='button-1'>
          <Button  variant="dark" size="sm">Buy Now</Button>
          <Button variant="secondary" size="sm">Learn More</Button>
        </div>
<div className='image-1'>
          <img src="https://i03.appmifile.com/573_item_in/04/01/2024/54cabe34bd58e615c5d1fdc6b8ed3c71.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>   
     </div>
        <div className='cards mt-3 ms-2'>
        <div className='heading-1'>
          <h3>Redmi Note 13G</h3>
          <h4>From $17,999</h4>
        </div>
        <div className='button-1'>
          <Button  variant="dark" size="sm">Buy Now</Button>
          <Button variant="secondary" size="sm">Learn More</Button>
        </div>
<div className='image-1'>
          <img src="https://i03.appmifile.com/18_item_in/05/12/2023/0e57f710c22813234127441579f39881.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>  
      </div>
        <div className='cards mt-3 ms-2'>
        <div className='heading-1'>
          <h3>Redmi Note 13G</h3>
          <h4>From $17,999</h4>
        </div>
       <div className='button-1'>
          <Button  variant="dark" size="sm">Buy Now</Button>
          <Button variant="secondary" size="sm">Learn More</Button>
       </div>
<div className='image-1'>
          <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>        </div>
</div>
<div className='container-fluid d-flex'>
    <div className='cards mt-3 ms-2'>
            <div className='heading-1'>
              <h3>Redmi Note 13G</h3>
              <h4>From $17,999</h4>
            </div>
            <div className='button-1'>
              <Button  variant="dark" size="sm">Buy Now</Button>
              <Button variant="secondary" size="sm">Learn More</Button>
            </div>
<div className='image-1'>
              <img src="https://i03.appmifile.com/573_item_in/04/01/2024/54cabe34bd58e615c5d1fdc6b8ed3c71.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>            </div>
            <div className='cards mt-3 ms-2'>
            <div className='heading-1'>
              <h3>Redmi Note 13G</h3>
              <h4>From $17,999</h4>
            </div>
            <div className='button-1'>
              <Button  variant="dark" size="sm">Buy Now</Button>
              <Button variant="secondary" size="sm">Learn More</Button>
            </div>
<div className='image-1'>
              <img src="https://i03.appmifile.com/18_item_in/05/12/2023/0e57f710c22813234127441579f39881.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>            </div>
            <div className='cards mt-3 ms-2'>
            <div className='heading-1'>
              <h3>Redmi Note 13G</h3>
              <h4>From $17,999</h4>
            </div>
            <div className='button-1'>
              <Button  variant="dark" size="sm">Buy Now</Button>
              <Button variant="secondary" size="sm">Learn More</Button>
            </div>
<div className='image-1'>
              <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>            </div>
    
</div>
<div className='container-fluid d-flex'>
    <div className='cards mt-3 ms-2'>
               <div className='heading-2'>
                  <h3>Redmi Note 13G</h3>
                  <h4>From $17,999</h4>
               </div>
                <div className='button-2'>
                  <Button  variant="dark" size="sm">Buy Now</Button>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </div>
<div className='image-2'>
      <img src="https://i03.appmifile.com/573_item_in/04/01/2024/54cabe34bd58e615c5d1fdc6b8ed3c71.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>                </div>
                <div className='cards mt-3 ms-2'>
                <div className='heading-2'>
                  <h3>Redmi Note 13G</h3>
                  <h4>From $17,999</h4>
                </div>
                <div className='button-2'>
                  <Button  variant="dark" size="sm">Buy Now</Button>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </div>
<div className='image-2'>
                  <img src="https://i03.appmifile.com/18_item_in/05/12/2023/0e57f710c22813234127441579f39881.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>                </div>
                <div className='cards mt-3 ms-2'>
                <div className='heading-2'>
                  <h3>Redmi Note 13G</h3>
                  <h4>From $17,999</h4>
                </div>
                <div className='button-2'>
                  <Button  variant="dark" size="sm">Buy Now</Button>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </div>
<div className='image-2'>
                  <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>                
</div>
                <div className='cards mt-3 ms-2'>
                <div className='heading-2'>
                  <h3>Redmi Note 13G</h3>
                  <h4>From $17,999</h4>
                </div>
                <div className='button-2'>
                  <Button  variant="dark" size="sm">Buy Now</Button>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </div>
<div className='image-2'>
<img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'250px'} />
  
</div>              
       </div>
       </div>
       <div className='text-center mt-3'>
       <h2>Xiaomi Series</h2> 
       <p>Be A Class Apart</p>
       <a  href=""><button >All Xiaomi Phones</button></a>
       </div>
       <Container className='container-fluid'>
      <Row>
        <Col className='con1 text-center'>
            <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="">Screen Protect</a>

            <p>Screen Protection against Accidental, Liquid Damage</p>  
    
                   <p> Avail 2 Claims Per year</p> 
           <img src="https://i03.appmifile.com/170_operator_in/17/11/2022/82fedea7a46e8764e69fc726a8d76752!260x260.png" alt="" width={'120px'} />
        </Col>
        <Col className='con1 text-center ms-2'>
            <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="">Mi Complete Protect</a>
            <p>SafeGuard Your SmartPhone Against Accidental & Liquid</p>  
            <p>Damages</p> 
           <img src="https://i03.appmifile.com/781_operator_in/08/12/2022/22fab0063071b5db457146f5b1324b76!260x260.jpg" alt="" width={'120px'} />
        </Col>      
        
        </Row>
      </Container>
      <Container className='container-fluid mt-2'>
      <Row>
        <Col className='con1 text-center'>
            <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="">Screen Protect</a>

            <p>We are Committed to provide the best quality at an honest</p>  
    
                   <p> Price</p> 
           <img src="https://i03.appmifile.com/534_operator_in/18/11/2022/7fd852381d5ea477ca830209bc26bef5!260x260.png" alt="" width={'120px'} />
        </Col>
        <Col className='con1 text-center ms-2 mb-2'>
            <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="">SmartPhone Quality</a>
            <p>Mi Exchange</p>  
            <p>Exchange Your Old Smart Phone in Three Simple Steps</p> 
           <img src="https://i03.appmifile.com/164_operator_in/18/11/2022/499a4881d1d34e3c93ad0ef14b98d410!260x260.png" alt="" width={'120px'} />
        </Col>      
        
        </Row>
      </Container>

</div>

    
  )
}

export default Phone