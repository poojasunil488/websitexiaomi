import React from 'react';
import './Support.css'
import Carousel from 'react-bootstrap/Carousel';

function Support() {
  return (
    <div className='supportpage'>
         <div className="carousal ">
            <Carousel>
             <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/892_operator_in/25/07/2023/ef3d817e3cb449619e2787722708836a.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/715_operator_in/27/07/2023/fa1c8610ec41707ad8390f03b4522c91.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      </Carousel>
      </div>
      {/* --------------------------------------------------------------------------------------- */}

      <div className='support-text'>
<div className="support p-5">
         <h2>Xiaomi Support</h2> 
         </div>      
 </div>
 
 {/* ---------------------------------------------------------------------------------- */}
 <div className='block1 d-flex gap-2'>
    <Card  style={{ width: '40rem',height:'25rem'}}>
          <Card.Img variant="top" src="https://i02.appmifile.com/265_operator_sg/05/01/2024/ff4d8d8235394458364d40c0cec3d6e4.png?f=webp" />
          <Card.Body>
            <Card.Title>Republic Day Sale is Live !</Card.Title>
            <Card.Text>
          Grab The Best Technology At Unbeatable Price!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  style={{ width: '40rem',height:'25rem'}}>
          <Card.Img variant="top" src="https://i02.appmifile.com/265_operator_sg/05/01/2024/ff4d8d8235394458364d40c0cec3d6e4.png?f=webp" />
          <Card.Body>
            <Card.Title>Republic Day Sale is Live !</Card.Title>
            <Card.Text>
          Grab The Best Technology At Unbeatable Price!
            </Card.Text>
          </Card.Body>
        </Card>
    
 </div>









    </div>
  )
}

export default Support