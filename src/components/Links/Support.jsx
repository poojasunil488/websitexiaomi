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












    </div>
  )
}

export default Support